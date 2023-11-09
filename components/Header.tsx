import * as React from "react";
import { RowsIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export default function Header(props) {
  const { setTheme } = useTheme();
  const routes = [
    {
      href: "/",
      label: "Teams",
    },
    {
      href: "/",
      label: "Framer",
    },
    {
      href: "/",
      label: "Wordle",
    },
  ];

  return (
    <header className="sm:flex sm:justify-between px-4 md:px-24 fixed left-0 top-0 w-full max-w-2xl m-0 bg-white dark:bg-black">
      <div className="relative flex h-16 items-center min-w-full border-b p-0">
        {/* mobile dropdown menu */}
        <nav className="w-full px-2 pt-2 md:hidden">
          <Sheet>
            <SheetTrigger>
              <RowsIcon className="h-[1.2rem] w-[1.2rem]" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] flex flex-col gap-4">
              <ul>
                {routes.map((route) => (
                  <li key={route.label} onClick={() => props.setShow(route.label)} className="block px-2 py-1 text-lg">
                    <SheetClose>{route.label}</SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </nav>

        {/* midsize and larger buttons */}
        <nav className="hidden md:flex justify-start w-full">
          {routes.map((route) => (
            <Button variant="ghost" key={route.label} onClick={() => props.setShow(route.label)}>
              {route.label}
            </Button>
          ))}
        </nav>

        {/* darkmode dropdown selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

