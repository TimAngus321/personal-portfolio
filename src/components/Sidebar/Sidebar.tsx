import Link from "next/link";

export default function Sidebar() {
  // Server-side logic can go here (fetch data, etc.)
  return (
    <aside>
      <nav>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
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
  )
}