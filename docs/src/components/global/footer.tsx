import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
            {/* Left: Logo and Name */}
            <div className="flex items-center space-x-2 md:w-1/3 justify-center md:justify-start">
                <div className="h-6 w-6 rounded bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">NK</span>
                </div>
                <span className="font-bold">NativeKit</span>
            </div>
            {/* Middle: Built with love */}
            <div className="md:w-1/3 flex justify-center">
                <p className="text-center text-sm leading-loose text-muted-foreground">
                    Built with ❤️ by thund3rhawk.
                </p>
            </div>
            {/* Right: Links */}
            <div className="flex items-center space-x-4 md:w-1/3 justify-center md:justify-end">
                <Link
                    href="https://github.com/thund3rhawk/nativekit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                >
                    <Github className="h-5 w-5" />
                </Link>
                <Link
                    href="/docs"
                    className="text-sm text-muted-foreground hover:text-foreground"
                >
                    Documentation
                </Link>
                <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                >
                    Examples
                </Link>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
