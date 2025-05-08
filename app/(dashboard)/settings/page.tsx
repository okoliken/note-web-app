"use client";
import { IconDark, IconLight, IconSystem } from "@/components/icons";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [_, setCurrentTheme] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");

  // Handle initial theme sync after component mounts
  useEffect(() => {
    setCurrentTheme(theme || "system");
    setSelectedTheme(theme || "system");
  }, [theme]);

  const handleThemeSelection = (value: string) => {
    if (value) setSelectedTheme(value);
  };

  const applyChanges = () => {
    if (selectedTheme) {
      setTheme(selectedTheme);
      setCurrentTheme(selectedTheme);
    }
  };

  return (
    <div className="text-base-950 dark:text-white p-8 w-full">
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold">Color Theme</h3>
        <p className="text-sm">Choose your color theme:</p>
      </div>

      <ToggleGroup
        type="single"
        className="w-full max-w-[528px] mt-[31px]"
        value={selectedTheme}
        onValueChange={handleThemeSelection}
      >
        <ToggleGroupItem
          value="light"
          aria-label="Light theme"
          className="h-[72px] border border-base-200 dark:border-base-700 p-4 rounded-xl"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-x-4">
              <div className="w-10 h-10 bg-white dark:bg-base-950 border border-base-200 dark:border-base-700 rounded-xl flex items-center justify-center">
                <IconLight />
              </div>

              <div className="flex items-start flex-col gap-1.5">
                <h3>Light Mode</h3>
                <p className="font-normal text-xs">
                  Pick a clean and classic light theme
                </p>
              </div>
            </div>
          </div>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="dark"
          aria-label="Dark theme"
          className="h-[72px] border border-base-200 dark:border-base-700 p-4 rounded-xl"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-x-4">
              <div className="w-10 h-10 bg-white dark:bg-base-950 border border-base-200 dark:border-base-700 rounded-xl flex items-center justify-center">
                <IconDark />
              </div>

              <div className="flex items-start flex-col gap-1.5">
                <h3>Dark Mode</h3>
                <p className="font-normal text-xs">
                  Select a sleek and modern dark theme
                </p>
              </div>
            </div>
          </div>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="system"
          aria-label="System theme"
          className="h-[72px] border border-base-200 dark:border-base-700 p-4 rounded-xl"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-x-4">
              <div className="w-10 h-10 bg-white dark:bg-base-950 border border-base-200 dark:border-base-700 rounded-xl flex items-center justify-center">
                <IconSystem />
              </div>

              <div className="flex items-start flex-col gap-1.5">
                <h3>System</h3>
                <p className="font-normal text-xs">
                  Adapts to your device's theme
                </p>
              </div>
            </div>
          </div>
        </ToggleGroupItem>
      </ToggleGroup>

      <div className="flex items-end justify-end w-full max-w-[528px]">
        <Button className="mt-6" onClick={applyChanges}>
          Apply Changes
        </Button>
      </div>
    </div>
  );
}
