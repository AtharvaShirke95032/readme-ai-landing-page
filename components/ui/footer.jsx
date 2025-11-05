import Link from "next/link";
import {
  Github,
  Twitter,
  Youtube,
  Package, // used for npm
} from "lucide-react";



export default function FooterSection() {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          {/* You can add your logo here if needed */}
        </Link>

        {/* Navigation Links */}
        
        {/* Social Links */}
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          <Link
            href="https://github.com/AtharvaShirke95032/readme-ai-npm-package"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary block"
          >
            <Github className="size-6" />
          </Link>

          <Link
            href="https://twitter.com/catmeow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-muted-foreground hover:text-primary block"
          >
            <Twitter className="size-6" />
          </Link>

          <Link
            href="https://www.youtube.com/@TryCatch-gng"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-muted-foreground hover:text-primary block"
          >
            <Youtube className="size-6" />
          </Link>

          <Link
            href="https://www.npmjs.com/package/@catmeow/readme-ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="npm"
            className="text-muted-foreground hover:text-primary block"
          >
            <Package className="size-6" />
          </Link>
        </div>

        <span className="text-muted-foreground block text-center text-sm">
          © {new Date().getFullYear()} catmeow, All rights reserved
        </span>
      </div>
    </footer>
  );
}