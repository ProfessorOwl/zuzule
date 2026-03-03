import { Container } from "@mantine/core";
import Video from "next-video";

interface MBlockMathWarnProps {
    src: string;
}

export default function BlockMathScroll({ src }: MBlockMathWarnProps) {
    return (
        <Container my={"md"} maw={750}>
            <Video src={src} />
        </Container>
    );
}
