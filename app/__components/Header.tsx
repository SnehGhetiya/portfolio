import Link from 'next/link';
import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="border-border border-b">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-foreground text-2xl font-bold transition-opacity hover:opacity-70">
            S
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <Link href="#projects" className="text-foreground text-sm font-medium transition-opacity hover:opacity-70">
              Projects
            </Link>
            <Link href="#blog" className="text-foreground text-sm font-medium transition-opacity hover:opacity-70">
              Blogs
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
