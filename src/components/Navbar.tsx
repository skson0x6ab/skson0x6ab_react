import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  GitHubLogoIcon,
  AvatarIcon,
  Cross1Icon,
  ExitIcon,
  CodeSandboxLogoIcon
} from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

import * as Dialog from "@radix-ui/react-dialog";
import { LoginForm } from "@/components/login-form";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/utils/cn"; 

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "/ETF", label: "ETF" },
  { href: "/shadcncomponents", label: "Shadcn" },
  { href: "/hoyoverse", label: "Hoyoverse" },
  { href: "/dashboard", label: "Dashboard" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // 모바일 메뉴
  const [dialogOpen, setDialogOpen] = useState(false); // 로그인 팝업
  const { isLoggedIn, logout } = useAuth();

  // 🔑 로그인 성공 콜백
  const handleLoginSuccess = () => {
    setDialogOpen(false);
    setTimeout(() => window.location.reload(), 100);
  };

  // 🔑 로그아웃 콜백
  const handleLogout = () => {
    setDialogOpen(false); // 먼저 팝업 닫기
    setTimeout(() => {
      logout();
      window.location.reload();
    }, 150); // 팝업 닫힌 후 새로고침
  };

  const AuthIconButton = () => (
    <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger asChild>
        <button>
          {!isLoggedIn ? (
            <AvatarIcon className="w-5 h-5" />
          ) : (
            <ExitIcon className="w-5 h-5" onClick={handleLogout} />
          )}
        </button>
      </Dialog.Trigger>

      {!isLoggedIn && (
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-[9998]" />
          <Dialog.Content
            className="fixed left-1/2 top-1/2 z-[9999] w-[90%] max-w-md
                       -translate-x-1/2 -translate-y-1/2
                       rounded-2xl p-6 shadow-lg focus:outline-none border-none
                       flex flex-col items-center gap-4"
          >
            <LoginForm onLoginSuccess={handleLoginSuccess} />
            <Dialog.Close asChild>
              <button className="text-gray-500">
                <Cross1Icon className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      )}
    </Dialog.Root>
  );

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a rel="noreferrer noopener" href="/" className="ml-2 font-bold text-xl flex">
              <CodeSandboxLogoIcon className="mr-2 w-7 h-7" />
              Playground
            </a>
          </NavigationMenuItem>

          {/* 모바일 */}
          <span className="flex md:hidden items-center gap-2">
            <AuthIconButton />
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5" onClick={() => setIsOpen(true)}>
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">Playground</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "font-sans font-semibold text-sm" 
                      )}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* 데스크탑 */}
          <nav className="hidden md:flex gap-2 ">
            {routeList.map((route, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "font-sans font-semibold text-sm" 
                )}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="items-center gap-2 hidden md:flex">
            <a
              rel="noreferrer noopener"
              href="https://github.com/skson0x6ab"
              target="_blank"
            >
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <ModeToggle />
            <AuthIconButton />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
