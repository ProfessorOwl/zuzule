import { ScrollArea } from "@mantine/core";
import { BlockMath as BlockMathKatex, InlineMath as InlineMathKatex } from "react-katex";

interface MathProps {
    math: string;
}

export function BlockMath({ math }: MathProps) {
    return (
        <ScrollArea maw={{ base: "calc(100vw - 80px)", md: "calc(50vw - 80px)", lg: "calc(55vw - 80px)", xl: "calc(100vw - 80px)" }} type="auto" mx={"auto"} w={"100%"}>
            <BlockMathKatex>{String.raw`\begin{aligned}`.concat(String(math), String.raw`\end{aligned}`)}</BlockMathKatex>
        </ScrollArea>
    );
}
