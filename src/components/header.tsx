"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
  { href: "/", label: "home" },
  { href: "/works", label: "works" },
  { href: "/journal", label: "journal" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-border">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="text-sm font-medium no-underline hover:no-underline">
          sean thor conroe
        </Link>

        <nav className="hidden md:flex md:gap-6 items-center">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm no-underline hover:no-underline ${
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>

        <button
          className="md:hidden text-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "[close]" : "[menu]"}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm no-underline ${
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-border">
              <ModeToggle />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
