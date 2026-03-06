import { Suspense } from "react";
import { CheckableHeading } from "./CheckableHeading";

interface SuspenseCheckableHeadingProps {
    title: string;
    children: React.ReactNode;
    id?: string;
}

export function SuspenseCheckableHeading({ title, children, id }: SuspenseCheckableHeadingProps) {
    return (
        <Suspense>
            <CheckableHeading title={title} id={id}>
                {children}
            </CheckableHeading>
        </Suspense>
    );
}
