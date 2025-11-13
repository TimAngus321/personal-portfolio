import Link from "next/link";
import IconButton from "@/components/IconButton/IconButton";
import HomeIcon from "@/components/Icons/Home/HomeIcon";
import styles from "./sidebarStyle.module.scss";
import AboutIcon from "@/components/Icons/About/AboutIcon";
import ServicesIcon from "@/components/Icons/Services/ServicesIcon";
import SkillsIcon from "@/components/Icons/Skills/SkillsIcon";
import WorkIcon from "@/components/Icons/Work/WorkIcon";
import ContactIcon from "@/components/Icons/Contact/ContactIcon";

export default function Sidebar() {
  // Server-side logic can go here (fetch data, etc.)
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.navListContainer}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/" aria-label="Home Link">
              <IconButton icon={HomeIcon} />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={styles.navLink}
              href="/about"
              aria-label="About Link"
            >
              <IconButton icon={AboutIcon} />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/services">
              <IconButton icon={ServicesIcon} />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/skills">
              <IconButton icon={SkillsIcon} />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/work">
              <IconButton icon={WorkIcon} />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href="/contact">
              <IconButton icon={ContactIcon} />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
