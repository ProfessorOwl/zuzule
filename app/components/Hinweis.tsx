import { Spoiler } from "@mantine/core";
import { CheckableHeading } from "./CheckableHeading";
interface LösungProps {
    children: React.ReactNode;
    title?: string;
    id?: string;
    titleOrder?: 1 | 2 | 3 | 4 | 5 | 6;
}
export function Hinweis({ children, title = "Hinweis", id, titleOrder }: LösungProps) {
    const spoiler = (
        <Spoiler maxHeight={0} showLabel="Hinweis anzeigen" hideLabel="Hinweis verbergen">
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
