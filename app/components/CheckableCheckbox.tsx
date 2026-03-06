"use client";

import { Checkbox, CheckboxProps } from "@mantine/core";
import { IconDotsDiagonal2 } from "@tabler/icons-react";

interface CheckableCheckboxProps extends Omit<CheckboxProps, "icon" | "onChange"> {
    checked: boolean;
    onChange: (value: boolean) => void;
    icon?: CheckboxProps["icon"];
}

export function CheckableCheckbox({ checked, onChange, icon, ...props }: CheckableCheckboxProps) {
    const CheckboxIcon: CheckboxProps["icon"] = icon || (({ indeterminate, ...others }) => (indeterminate ? <IconDotsDiagonal2 {...others} /> : <IconDotsDiagonal2 {...others} />));

    return <Checkbox checked={checked} onChange={(event) => onChange(event.currentTarget.checked)} size="md" color="red" variant="outline" icon={CheckboxIcon} {...props} />;
}
