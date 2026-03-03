import { ScrollArea } from "@mantine/core";
import { BlockMath } from "react-katex";

interface MBlockMathWarnProps {
    children: string;
}

export default function BlockMathScroll({ children }: MBlockMathWarnProps) {
    return (
        <ScrollArea maw="calc(100vw - 80px)" type="auto">
            <BlockMath>{children}</BlockMath>
        </ScrollArea>
    );
}
