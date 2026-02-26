"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
    Blockquote,
    Checkbox,
    CheckboxProps,
    Collapse,
    getPrimaryShade,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import {
    IconDotsDiagonal2,
    IconArrowBearRight2,
    IconHelpHexagonFilled,
    IconInfoHexagonFilled,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

interface CheckableBlockquoteProps {
    children: React.ReactNode;
    title?: string;
    id?: string;
    icon?: IconMapKey;
    titleOrder?: 1 | 2 | 3 | 4 | 5 | 6;
}

const IconMap = {
    frage: IconHelpHexagonFilled,
    aha: IconInfoHexagonFilled,
    exkurs: IconArrowBearRight2,
} as const;

type IconMapKey = keyof typeof IconMap;

export function CheckableBlockquote({
    children,
    title,
    id,
    icon,
    titleOrder = 2,
}: CheckableBlockquoteProps) {
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

    const Icon = icon ? IconMap[icon] : null;

    return (
        <Blockquote px={"lg"} py={"md"} my={"md"} data-checkable-id={uniqueId}>
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
                <Text
                    component="div"
                    lineClamp={checked ? 1 : 0}
                    opacity={checked ? 0.3 : 1}
                    mt={5}
                    lh={1.7}
                >
                    {children}
                </Text>
            </Collapse>
        </Blockquote>
    );
}
