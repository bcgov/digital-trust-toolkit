import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export interface BoxLinkProps {
  id: string;
  label: string;
  metadata: any;
  displayDescription?: boolean;
}

export default function BoxLink({
  label,
  metadata,
  displayDescription = true,
}: BoxLinkProps) {
  return (
    <div className={clsx("col col--3", styles.boxLink)}>
      <Link to={metadata?.to} className={clsx("unstyled-link")}>
        <div>
          <Heading as="h2">{label}</Heading>
          {displayDescription && <p>{metadata?.description}</p>}
        </div>
      </Link>
    </div>
  );
}
