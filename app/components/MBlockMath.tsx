import { Container } from "@mantine/core";
import {BlockMathScroll as BlockMath} from "./CustomMath";
import { Fragment } from "react/jsx-runtime";
interface MBlockMathProps {
    mobile: string;
    desktop: string;
}

export default function MBlockMath({ mobile, desktop }: MBlockMathProps) {
    return (
        <Fragment>
            <Container visibleFrom="md" p={0}>
                <BlockMath math={desktop}/>
            </Container>
            <Container hiddenFrom="md" p={0}>
                <BlockMath math={mobile}/>
            </Container>
        </Fragment>
    );
}
