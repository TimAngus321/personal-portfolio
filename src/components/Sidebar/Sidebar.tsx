import Link from "next/link";
import IconButton from "@/components/IconButton/IconButton";
import HomeIcon from "@/components/Icons/Home/HomeIcon";
import styles from "./sidebarStyle.module.scss";
import homeButtonStyles from '@/components/Icons/Home/homeButtonStyles.module.scss';

export default function Sidebar() {
  // Server-side logic can go here (fetch data, etc.)
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <Link href="/" 
          aria-label="Home Link">
            <li className={homeButtonStyles.homeButton}>
              <IconButton
                icon={HomeIcon}
              />
            </li>
          </Link>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
