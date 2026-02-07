import { Spoiler } from "@mantine/core";
interface LösungProps {
    children: React.ReactNode;
}
export function Lösung({ children }: LösungProps) {
    return (
        <Spoiler
            maxHeight={0}
            showLabel="Lösung anzeigen"
            hideLabel="Lösung verbergen"
        >
            {children}
        </Spoiler>
    );
}
