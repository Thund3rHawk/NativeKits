'use client';
import React, { useEffect, useState } from 'react';
import { ThemeToggle } from '@/components/global/theme-toggle';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { Button } from '../ui/button';

type Props = {};

const Navbar = (props: Props) => {
  const [stars, setStars] = useState(null);

  // useEffect(() => {
  //   const fetchStars = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api.github.com/repos/thund3rhawk/nativekits`
  //       );
  //       const data = await response.json();
  //       setStars(data.stargazers_count);
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error fetching stars:', error);
  //     }
  //   };

  //   fetchStars();
  // }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">NK</span>
            </div>
            <span className="font-bold text-xl">NativeKits</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/docs"
            className="transition-colors hover:text-foreground/80"
          >
            Documentation
          </Link>
          <Link
            href="#components"
            className="transition-colors hover:text-foreground/80"
          >
            Components
          </Link>
          <Link
            href="#examples"
            className="transition-colors hover:text-foreground/80"
          >
            Examples
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-5">
          <Button variant="ghost" size="sm" asChild>
            <Link
              href="https://github.com/thund3rhawk/nativekit"
              target="_blank"
            >
              <Github className="h-4 w-4" />
              {/* <span>{stars}</span> */}
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/docs">Get Started</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
