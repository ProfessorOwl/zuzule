import { Spoiler } from "@mantine/core";
import { CheckableHeading } from "./CheckableHeading";
interface LösungProps {
    children: React.ReactNode;
    title?: string;
    id?: string;
    titleOrder?: 1 | 2 | 3 | 4 | 5 | 6;
}
export function Lösung({
    children,
    title,
    id,
    titleOrder,
}: LösungProps) {
    const spoiler = (
        <Spoiler
            maxHeight={0}
            showLabel="Lösung anzeigen"
            hideLabel="Lösung verbergen"
        >
            {children}
        </Spoiler>
    );

    return title ? (
        <CheckableHeading title={title} id={id} titleOrder={titleOrder}>
            {spoiler}
        </CheckableHeading>
    ) : (
        spoiler
    );
}
