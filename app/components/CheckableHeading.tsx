"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox, Stack } from "@mantine/core";

interface CheckableHeadingProps {
  children: React.ReactNode;
  title: string;
  id?: string;
  maxHeight?: number; // Optional prop to specify the shortened height
}

export function CheckableHeading({ children, title, id, maxHeight = 90 }: CheckableHeadingProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Die Überschrift
  const uniqueId = id || `${title?.toString().replace(/\s+/g, "-").toLowerCase()}`;

  const [checked, setChecked] = useState(false);

  // Load checkbox state from URL query parameters on mount
  useEffect(() => {
    const urlValue = searchParams.get(uniqueId);
      setChecked(urlValue === "true");
  }, [uniqueId, searchParams]);

  // Update URL when checkbox state changes
  const handleChange = (value: boolean) => {
    setChecked(value);

    // Update URL query parameters
    const newSearchParams = new URLSearchParams(searchParams.toString());
    if (value) {
      newSearchParams.set(uniqueId, "true");
    } else {
      newSearchParams.delete(uniqueId);
    }

    // Update the URL without causing a page reload
    const newUrl = `${window.location.pathname}?${newSearchParams.toString()}`;
    router.replace(newUrl, { scroll: false });
  };

  return (
    <Stack gap="0">
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Checkbox
        checked={checked}
        onChange={(event) => handleChange(event.currentTarget.checked)}
        size="md"
      />
      <h1 style={{ margin: 0 , filter: checked ? "opacity(30%)" : "none",
}}>{title}</h1>
    </div>
    <div style={{
      position: "relative",
      maxHeight: checked ? `${maxHeight}px` : "none",
      filter: checked ? "opacity(30%)" : "none",
      overflow: checked ? "hidden" : "visible",
    }}>
        {children}
      </div>
    </Stack>
  );
}