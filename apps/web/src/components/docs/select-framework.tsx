"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { SiExpress, SiNestjs, SiNextdotjs } from "react-icons/si";
import { usePathname, useRouter } from "next/navigation";
import { Route } from "next";
import {
  useFramework,
  Framework as FrameworkType
} from "@/store/use-framework";
import { useEffect } from "react";
const FRAMEWORK_SECTIONS = [
  "blueprints",
  "components",
  "foundations",
  "schemas"
];

type SelectFrameworkMode = "docs" | "store-only";

export function SelectFramework({
  mode = "docs"
}: {
  mode?: SelectFrameworkMode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { framework, setFramework } = useFramework();

  // Detect current framework from URL
  const segments = pathname.split("/").filter(Boolean);
  const currentFrameworkFromUrl: FrameworkType | null =
    segments[1] === "express" ||
    segments[1] === "nestjs" ||
    segments[1] === "nextjs"
      ? (segments[1] as FrameworkType)
      : null;

  // Sync URL framework with store on mount and URL change (docs routes only)
  useEffect(() => {
    if (mode !== "docs") return;
    if (currentFrameworkFromUrl && currentFrameworkFromUrl !== framework) {
      setFramework(currentFrameworkFromUrl);
    }
  }, [mode, currentFrameworkFromUrl, framework, setFramework]);

  // Determine the value to display in the select
  // Priority: URL framework > Stored framework > "express" (default)
  const displayValue = currentFrameworkFromUrl || framework || "express";

  const handleChange = (value: FrameworkType) => {
    setFramework(value);

    if (mode === "store-only") return;

    const currentSegments = pathname.split("/").filter(Boolean);

    if (currentSegments[0] !== "docs") return;

    // Remove existing framework if present
    if (
      currentSegments[1] === "express" ||
      currentSegments[1] === "nestjs" ||
      currentSegments[1] === "nextjs"
    ) {
      currentSegments.splice(1, 1);
    }

    const section = currentSegments[1];

    // Only apply framework to framework-based sections
    if (!FRAMEWORK_SECTIONS.includes(section)) return;

    // Insert framework after /docs
    if (value) {
      currentSegments.splice(1, 0, value);
    }

    router.push(`/${currentSegments.join("/")}` as Route);
  };

  return (
    <div className="space-y-2">
      <Label className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
        Select Framework
      </Label>

      <Select value={displayValue} onValueChange={handleChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Framework" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="express">
              <div className="flex items-center gap-3 font-medium">
                <SiExpress className="text-primary size-4" />
                Express.js
              </div>
            </SelectItem>

            <SelectItem value="nextjs">
              <div className="flex items-center gap-3 font-medium">
                <SiNextdotjs className="text-primary size-4" />
                Next.js
              </div>
            </SelectItem>

            <SelectItem value="nestjs">
              <div className="flex items-center gap-3 font-medium">
                <SiNestjs className="text-primary size-4" />
                NestJS
              </div>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
