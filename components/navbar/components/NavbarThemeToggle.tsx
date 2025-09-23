"use client";

import { useTranslations } from "next-intl";
import { Monitor, Moon, Sun } from "lucide-react";

import useTheme from "@/hooks/useTheme";
import { cn } from "@/lib/utils/utils";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const NavbarThemeToggle = () => {
  const t = useTranslations("Navbar");
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">{t("Theme")}</span>

      <TooltipProvider>
        <div className="flex items-center rounded-full border p-0.5 bg-muted/50">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme("system")}
                className={cn(
                  "h-6 w-6 p-0 rounded-full hover:cursor-pointer",
                  theme === "system" && "bg-background text-foreground shadow-sm"
                )}
              >
                <Monitor className="h-3 w-3" />
              </Button>
            </TooltipTrigger>

            <TooltipContent className="bg-background text-foreground shadow-sm">
              <p>{t("ThemeSystem")}</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme("light")}
                className={cn(
                  "h-6 w-6 p-0 rounded-full hover:cursor-pointer",
                  theme === "light" && "bg-background text-foreground shadow-sm"
                )}
              >
                <Sun className="h-3 w-3" />
              </Button>
            </TooltipTrigger>

            <TooltipContent className="bg-background text-foreground shadow-sm">
              <p>{t("ThemeLight")}</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme("dark")}
                className={cn(
                  "h-6 w-6 p-0 rounded-full hover:cursor-pointer",
                  theme === "dark" && "bg-background text-foreground shadow-sm"
                )}
              >
                <Moon className="h-3 w-3" />
              </Button>
            </TooltipTrigger>
            
            <TooltipContent className="bg-background text-foreground shadow-sm">
              <p>{t("ThemeDark")}</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
};

export default NavbarThemeToggle;
