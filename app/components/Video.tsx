import { Container } from "@mantine/core";
import dynamic from "next/dynamic";

const Video = dynamic(() => import("next-video"), {ssr: true})
interface VideoProps {
    src: string;
}

export default function BlockMathScroll({ src }: VideoProps) {
    return (
        <Container my={"md"} maw={750}>
            <Video src={src} />
        </Container>
    );
}
