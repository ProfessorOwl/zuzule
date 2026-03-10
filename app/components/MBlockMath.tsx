import { Box } from "@mantine/core";
import { BlockMathScroll as BlockMath } from "./CustomMath";
import { Fragment } from "react/jsx-runtime";
interface MBlockMathProps {
    mobile: string;
    desktop: string;
}

export default function MBlockMath({ mobile, desktop }: MBlockMathProps) {
    return (
        <Fragment>
            <Box visibleFrom="md">
                <BlockMath math={desktop} />
            </Box>
            <Box hiddenFrom="md">
                <BlockMath math={mobile} />
            </Box>
        </Fragment>
    );
}
