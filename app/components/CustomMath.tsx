import { ScrollArea } from "@mantine/core";
import { BlockMath, InlineMath } from "react-katex";

interface MathProps {
    math: string;
}

export function BlockMathScroll({ math }: MathProps) {
    return (
        <ScrollArea maw="calc(100vw - 80px)" type="auto" mx={"auto"}>
            <BlockMath>{String.raw`\begin{aligned}`.concat(String(math), String.raw`\end{aligned}`)}</BlockMath>
        </ScrollArea>
    );
}

export function BetterInlineMath({ math }: MathProps) {
    return <InlineMath>{math}</InlineMath>;
}
