import Link from "next/link";
import CreatePost from "./createPost";

export default function Header() {
  return (
    <header className="flex gap-4 justify-between m-4">
      <Link href="/"> Home</Link>
      <CreatePost />
    </header>
  );
}
