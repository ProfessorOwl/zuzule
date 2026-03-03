"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
    Checkbox,
    CheckboxProps,
    Collapse,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import { IconDotsDiagonal2 } from "@tabler/icons-react";

interface CheckableHeadingProps {
    children: React.ReactNode;
    title: string;
    id?: string;
    titleOrder?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function CheckableHeading({
    children,
    title,
    id,
    titleOrder = 1,
}: CheckableHeadingProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const CheckboxIcon: CheckboxProps["icon"] = ({
        indeterminate,
        ...others
    }) =>
        indeterminate ? (
            <IconDotsDiagonal2 {...others} />
        ) : (
            <IconDotsDiagonal2 {...others} />
        );
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
    // Wenn px = 0, dann gibts keinen Overflow! Aber wenn = sm, dann verschiebt sich alles!
    return (
        <Stack gap="0" mb={"md"} mt={"xl"} data-checkable-id={uniqueId}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Checkbox
                    checked={checked}
                    onChange={(event) =>
                        handleChange(event.currentTarget.checked)
                    }
                    size="md"
                    color="red"
                    variant="outline"
                    icon={CheckboxIcon}
                />
                <Title
                    order={titleOrder}
                    style={{
                        margin: 0,
                        filter: checked ? "opacity(30%)" : "none",
                    }}
                >
                    {title}
                </Title>
            </div>
            <Collapse in={!checked}>
                <Text component="div">{children}</Text>
            </Collapse>
        </Stack>
    );
}
