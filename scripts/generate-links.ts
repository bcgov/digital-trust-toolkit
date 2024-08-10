import path from 'path';
import fs, { Dirent } from 'fs';
import fm from 'front-matter';

import { startCase, camelCase } from 'lodash';

const root = path.resolve(__dirname, '..');
const docs = path.resolve(root, 'docs');

export interface MainLink {
    id: string;
    to: string;
    label: string;
    description?: string;
    order?: number;
}

// Get a list of all directories in the docs folder
const generateMainLinks = (ordered: boolean = true): MainLink[] => {
    const dirs = fs.readdirSync(docs, { withFileTypes: true })
        .filter((dirent: Dirent) => dirent.isDirectory())
        .map((dirent: Dirent) => dirent.name);


    const _dirs = dirs.map((dir: string) => {

        // Check if there is an index.md or an _index.md file in the directory
        const indexFile = fs.readdirSync(path.resolve(docs, dir))
            .find((file: string) => file === 'index.md' || file === '_index.md');

        let frontMatter;
        if (indexFile) {
            // Read the front matter from the index file
            const indexFileContents = fs.readFileSync(path.resolve(docs, dir, indexFile), 'utf8');
            frontMatter = fm(indexFileContents);
        }

        const { attributes } = frontMatter;
        return {
            id: camelCase(dir),
            to: dir,
            label: startCase(dir),
            description: attributes?.description,
            order: attributes?.order,
        };
    });

    if (ordered) {
        return _dirs.sort((a: MainLink, b: MainLink) => {
            return (a?.order ?? Infinity) - (b?.order ?? Infinity);
        });
    }

    return _dirs;
};

export { generateMainLinks };