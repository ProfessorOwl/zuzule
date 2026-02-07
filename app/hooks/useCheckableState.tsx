"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface UseCheckableStateOptions {
    id?: string;
    title?: string;
}

export function useCheckableState({ id, title }: UseCheckableStateOptions) {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Die Überschrift wird zum Link hinzugefügt
    const uniqueId =
        id || `${title?.toString().replace(/\s+/g, "-").toLowerCase()}`;

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

    return {
        checked,
        handleChange,
        uniqueId,
    };
}
