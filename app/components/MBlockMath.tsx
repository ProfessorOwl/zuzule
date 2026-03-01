import { Container } from "@mantine/core";
import  BlockMath from "./BlockMath";
interface MBlockMathProps {
    mobile: String;
    desktop: String;

}

export default function MBlockMath({mobile, desktop}: MBlockMathProps) {
    return (
        <div>
        <Container visibleFrom="md" p={0}>
            <BlockMath>
                {desktop}
            </BlockMath>
        </Container>
        <Container hiddenFrom="md" p={0}>
            <BlockMath>
                {String.raw`\begin{aligned}`.concat(String(mobile),String.raw`\end{aligned}`)}
            </BlockMath>
        </Container>

        </div>
    )
}