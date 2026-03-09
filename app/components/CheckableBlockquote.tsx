"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Blockquote, Checkbox, CheckboxProps, Collapse, getPrimaryShade, Stack, Text, Title } from "@mantine/core";
import { IconDotsDiagonal2 } from "@tabler/icons-react";
import { FrageIcon, AhaIcon, ExkursIcon } from "./CustomIcons";

interface CheckableBlockquoteProps {
    children: React.ReactNode;
    title?: string;
    id?: string;
    icon?: IconMapKey;
    titleOrder?: 1 | 2 | 3 | 4 | 5 | 6;
}

const IconMap = {
    frage: FrageIcon,
    aha: AhaIcon,
    exkurs: ExkursIcon,
} as const;

type IconMapKey = keyof typeof IconMap;

function CheckableBlockquoteInner({ children, title, id, icon, titleOrder = 2 }: CheckableBlockquoteProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const CheckboxIcon: CheckboxProps["icon"] = ({ indeterminate, ...others }) => (indeterminate ? <IconDotsDiagonal2 {...others} /> : <IconDotsDiagonal2 {...others} />);

    // Die Überschrift wird zum Link hinzugefügt
    const uniqueId = id || `${title?.toString().replace(/\s+/g, "-").toLowerCase()}`;

    // Initialize checked state from searchParams
    const [checked, setChecked] = useState(() => searchParams.get(uniqueId) === "true");
    
    // Load checkbox state from URL query parameters on mount
    useEffect(() => {
        const urlValue = searchParams.get(uniqueId);
        setChecked(urlValue === "true");
    }, [uniqueId, searchParams]);
    const isStudent = searchParams.get("students") === "true"
    // Hide component if students=true and this item is checked
    if (isStudent && checked) {
        return null;
    }
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
        router.replace(newUrl, {
            scroll: false,
        });
    };

    const Icon = icon ? IconMap[icon] : null;

    return (
        <Blockquote
            px={{
                base: "xs",
                md: "lg",
            }}
            py={"md"}
            my={"md"}
            data-checkable-id={uniqueId}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                }}
            >
                {!isStudent && <Checkbox checked={checked} onChange={(event) => handleChange(event.currentTarget.checked)} size="md" color="red" variant="outline" icon={CheckboxIcon}/>}
                {Icon ? <Icon size={40} /> : null}
                {title && (
                    <Title
                        order={titleOrder}
                        style={{
                            margin: 0,
                            filter: checked ? "opacity(30%)" : "none",
                        }}
                    >
                        {title}
                    </Title>
                )}
            </div>
            <Collapse in={!checked}>
                <Text component="div" lineClamp={checked ? 1 : 0} opacity={checked ? 0.3 : 1} mt={5}>
                    {children}
                </Text>
            </Collapse>
        </Blockquote>
    );
}

export function CheckableBlockquote(props: CheckableBlockquoteProps) {
    return (
        <Suspense>
            <CheckableBlockquoteInner {...props} />
        </Suspense>
    );
}