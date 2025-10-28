import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="home">
      <h1>Alfie Thomasson</h1>
      <div>
        <Link href="/Page1" className="navLink">Page 1</Link>
        <Link href="/Page2" className="navLink">Page 2</Link>
        <Link href="/Page3" className="navLink">Page 3</Link>
      </div>
    </nav>
  );
}
