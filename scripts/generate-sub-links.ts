// We want to iterate over the folders and files in top folders of the docs directory
// and generate links for each.
import path from "path";
import fs, { Dirent } from "fs";
import fm from "front-matter";
import { startCase, camelCase } from "lodash";

import { Link } from "@site/src/interfaces/link";

/**
 *
 * @param dir a path to a directory
 * @returns an array of links
 */
const generateSubLinks = (dir: string): Link[] => {
  const _readFrontMatterFromFile = (filePath: string): any => {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const frontMatter = fm(fileContents);
    const { attributes }: any = frontMatter || {};
    return attributes;
  };

  const _generateLink = (to: string, name: string, attributes: any): Link => {
    // If there are no attributes then the name is the name of the file
    // If the name of the file is index.md or _index.md then the name of the file is the name of the directory
    name = name.replace(/\.mdx?$/, "");
    // Strip off _index or index from the end of the to path
    to = to.replace(/\/(?:_)?index\.mdx?$/, "");
    // Strip off everything before the docs directory
    to = to.replace(/.*\/docs/, "/docs");
    // Remove the file extension
    to = to.replace(/\.mdx?$/, "");

    return {
      id: camelCase(name),
      name: name,
      to: to,
      label: startCase(attributes?.title || name),
      description: attributes?.description,
      sidebar_position: attributes?.sidebar_position,
    } as Link;
  };

  const dirEntries = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((dirent: Dirent) => {
      // Skip any files or directories that start with an underscore
      // These are not rendered by Docusaurus
      if (dirent.name.startsWith("_")) {
        return false;
      }
      if (dirent.isFile()) {
        return dirent.name.endsWith(".md") || dirent.name.endsWith(".mdx");
      }
      return true;
    });

  // For each file in the folder that does not start with an underscore:
  const links: Link[] = dirEntries
    .map((dirent: Dirent) => {
      const resolvedPath = path.resolve(dirent.parentPath, dirent.name);

      if (dirent.isFile()) {
        return _generateLink(
          resolvedPath,
          dirent.name,
          _readFrontMatterFromFile(resolvedPath)
        );
      } else if (dirent.isDirectory()) {
        const dirIndexFile = fs
          .readdirSync(resolvedPath)
          .find((file: string) => file === "index.md" || file === "_index.md");

        const dirMdFile = fs
          .readdirSync(resolvedPath)
          .find(
            (file: string) =>
              file === `${dirent.name}.md` || file === `${dirent.name}.mdx`
          );

        // If there is an index.md or an _index.md file in the directory
        if (dirIndexFile) {
          const indexResolvedPath = path.resolve(resolvedPath, dirIndexFile);
          return _generateLink(
            indexResolvedPath,
            dirent.name,
            _readFrontMatterFromFile(indexResolvedPath)
          );
        } else if (dirMdFile) {
          // If there is no index.md or an _index.md file in the directory
          // Check if there is an md file in the directory with the same name as the directory
          const mdResolvedPath = path.resolve(resolvedPath, dirMdFile);
          return _generateLink(
            mdResolvedPath,
            dirent.name,
            _readFrontMatterFromFile(mdResolvedPath)
          );
        }

        // If there is no md file:
        // The name of the directory is the label in title case
        return _generateLink(resolvedPath, dirent.name, {});
      } else {
        return null;
      }
    })
    .filter((link?: Link | null) => !!link);

  return links;
};

export { generateSubLinks };
