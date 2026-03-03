import { SuspenseCheckableHeading } from "@/components/SuspenseCheckableHeading";
import { Image } from "@mantine/core";

export default function Kugeln() {
    return (
        <SuspenseCheckableHeading title="Die Kugel">
            Fragt man mehrere Mathematikerinnen und Mathematiker nach ihrer Lieblingsform, so werden viele von ihnen vermutlich antworten, dass die <b>Kugel</b> die beste Form ist. Kugeln haben nämlich einige interessante Eigenschaften: Sie hat keinerlei Kanten oder Ecken, kann frei rollen, sieht immer gleich aus, egal von welchem Winkel man sie betrachtet… Die Liste könnte jetzt noch lange weitergehen! Einige weitere Eigenschaften werden wir auf dieser Seite erkunden.
            <Image
                h={{base: "auto", md: 500}}
                width={3375}
                height={5062}
                src={"/Kugel/basketball.jpg"}
                alt="Ein Basketball, der ins Netz fällt"
            ></Image>
        </SuspenseCheckableHeading>
    );
}
