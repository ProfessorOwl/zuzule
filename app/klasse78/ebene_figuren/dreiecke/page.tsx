import { CheckableHeading } from "@/components/CheckableHeading";
import { Metadata } from "next";
import { Fragment } from "react/jsx-runtime";

export const metadata: Metadata = {
    title: "Dreiecke – zuzule",
};

export default function Dreiecke() {
    return (
        <Fragment>
            <CheckableHeading title="Dreiecke">
                Dreiecke sind die einfachsten Figuren, die du in der Ebene zeichnen kannst. Eine Figur mit zwei Punkten gibt es nicht mehr, da dann nur noch eine Linie übrig bleibt.
                <CheckableHeading title="Definition" titleOrder={2}>
                    Ein Dreieck ist eine Figur, die 3 Eckpunkte hat. Du kannst also ein beliebiges Dreieck zeichnen, wenn du zuerst drei Punkte aufzeichnest und diese dann mit Linien verbindest.
                </CheckableHeading>
            </CheckableHeading>
        </Fragment>
    );
}
