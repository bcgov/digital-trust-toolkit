import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { camelCase } from "lodash";
import BoxLink from "./BoxLink";
import { Link } from "@site/src/interfaces/link";

export default function PageLinks(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const {
    themeConfig: {
      navbar: { items },
    },
  }: { themeConfig: { navbar?: { items?: any[] } } } = siteConfig;

  // Remove the trailing slash from the URL
  const pathname = window.location.pathname.replace(/\/$/, "");
  // Get the last part of the URL
  const pathId = camelCase(pathname.split("/").pop());

  // Find the item in the navbar that matches the current pathId
  const currentItem = items.find((item) => item.sidebarId === pathId);

  // console.log(currentItem);

  if (currentItem?.metadata?.sublinks) {
    return (
      <div className="container">
        <div className="row">
          {currentItem.metadata.sublinks.map((sublink: Link, idx: number) => (
            <BoxLink
              key={idx}
              id={sublink.id}
              label={sublink.label}
              metadata={sublink}
              displayDescription={false}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
}
