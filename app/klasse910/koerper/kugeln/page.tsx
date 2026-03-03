import { CheckableHeading } from "@/components/CheckableHeading";
import { SuspenseCheckableHeading } from "@/components/SuspenseCheckableHeading";
import thinsp from "@/components/thinsp";
import { Flex } from "@mantine/core";
import Video from "@/components/Video"
import Lichtkugel from "/videos/Lichtkugel.mov";
import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import Image from "@/components/Image";


export default function Kugeln() {
    return (
        <div>
        <SuspenseCheckableHeading title="Die Kugel">
            Fragt man mehrere Mathematikerinnen und Mathematiker nach ihrer Lieblingsform, so werden viele von ihnen vermutlich antworten, dass die <b>Kugel</b> die beste Form ist. Kugeln haben nämlich einige interessante Eigenschaften: Sie hat keinerlei Kanten oder Ecken, kann frei rollen, sieht immer gleich aus, egal von welchem Winkel man sie betrachtet… Die Liste könnte jetzt noch lange weitergehen! Einige weitere Eigenschaften werden wir auf dieser Seite erkunden.
            <Flex>
                <Image
                    h={{base: "auto", md: 400}}
                    width={3375}
                    height={5062}
                    src={"/Kugel/basketball.jpg"}
                    alt="Ein Basketball, der ins Netz fällt"
                />
                <Image
                    h={{base: "auto", md: 400}}
                    width={3375}
                    height={5062}
                    src={"/Kugel/LasVegasSphere.jpg"}
                    alt="Ein Basketball, der ins Netz fällt"
                />
            </Flex>
        </SuspenseCheckableHeading>
        <CheckableHeading title="Definition">
            Eine Kugel ist eine Form, bei der alle Punkte auf der Oberfläche den <b>gleichen Abstand zu einem gemeinsamen Mittelpunkt</b> haben. Anders gesprochen: Nimmt man sich ein Seil mit fixer Länge und fixiert es an einem Stativ im Raum, dann sind all die Punkte Teil der Kugel, die man mit der Spitze erreichen kann. 
            Das Video unten zeigt die zweite Definition in Aktion:
            <Video src={Lichtkugel}/>
            Zeichnet man die Lichtbahnen nach, so entsteht dabei dieses Bild:
                <Image
                    h={{base: "auto", md: 400}}
                    width={1920}
                    height={1080}
                    src={"/Kugel/LichtKugel.jpg"}
                    alt="Eine Kugel, die aus Licht gezeichnet ist"
                />
            Durch das Fixieren des Mittelpunktes auf dem Stativ und einem festen Radius haben wir damit also eine Kugel mit einem Radius von 0,6{thinsp}m geschaffen.
            <CheckableBlockquote icon="aha" title="Probier es selbst aus!">
                Viele Handys können solche Langzeitbelichtungen machen. Schau mal in den Einstellungen deiner Handykamera und gucke nach der Einstellung. Stell dich dann in einen dunklen Raum und nimm eine schwache Lichtquelle, wie ein Feuerzeug, eine Wunderkerze oder ähnliches. Schau, was dabei rauskommt!
            </CheckableBlockquote>
        </CheckableHeading>
        </div>
    );
}
