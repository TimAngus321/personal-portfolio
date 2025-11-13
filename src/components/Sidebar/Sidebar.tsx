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
            <Link href="/" aria-label="Home Link">
              <IconButton icon={HomeIcon} />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">
              <IconButton icon={AboutIcon} />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services">
              <IconButton icon={ServicesIcon} />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/skills">
              <IconButton icon={SkillsIcon} />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/work">
              <IconButton icon={WorkIcon} />
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">
              <IconButton icon={ContactIcon} />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
