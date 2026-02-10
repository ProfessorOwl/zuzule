import { ImageCaption } from "@/components/ImageCaption";
import { CheckableHeading } from "@/components/CheckableHeading";
import { Divider, Flex, Group, Image } from "@mantine/core";
import NextImage from "next/image";
import { CheckableBlockquote } from "@/components/CheckableBlockquote";

export default function Quader() {
    return (
        <div>
            <CheckableHeading title="Der Zylinder">
                Zylinder sind beliebte Formen in unserem Alltag. Seien es
                Lampenschirme, die Stangen von Straßenlaternen oder
                Konservendosen – überall findet man diese Form. Deswegen ist es
                für uns interessant, diese Form mathematisch beschreiben zu
                können!
                <Flex my={"md"}>
                    <Image
                        h={300}
                        fit="contain"
                        component={NextImage}
                        src="/dosen.jpg"
                        width={6000}
                        height={4000}
                        alt="Verschiedene Dosen"
                    />
                    <Image
                        h={300}
                        fit="contain"
                        component={NextImage}
                        src="/regler.jpg"
                        width={6000}
                        height={4000}
                        alt="Ein Regler für die Lautstärke"
                    />
                </Flex>
            </CheckableHeading>

            <CheckableHeading title="Definition eines Zylinders">
                Die Grundfläche eines Zylinders ist immer ein <b>Kreis</b>. Wenn
                wir diesen nehmen und in den Raum hineinziehen, so bekommen wir
                einen Körper, den wir <b>Zylinder</b> nennen.
            </CheckableHeading>
            <CheckableBlockquote
                title="Aufgabe: Zylinder in der Umgebung"
                icon="IconHelpHexagonFilled"
            >
                Gehe raus und suche nach beliebigen Sachen, die für dich nach
                einem Zylinder aussehen. Fallen dir plötzlich vielleicht Dinge
                auf, die du vorher so noch nie bemerkt hast? Mache von deiner
                Expedition Fotos und bringe sie mit in den Unterricht!
            </CheckableBlockquote>
            <CheckableHeading title="Schrägbilder">
                Aus der Orientierungsstufe kennst du bereits das{" "}
                <b>Schrägbild</b> eines Quaders. Das sollte ungefähr so aussehen
                wie in dem Bild.
                <Image
                    my={"md"}
                    h={300}
                    fit="contain"
                    component={NextImage}
                    src="/QuaderSchrägbild@2x.png"
                    width={1802}
                    height={1200}
                    alt="Schrägbild eines Quaders auf kariertem Papier."
                />
                Verdeckte Kanten werden also mit einer gestrichelten Linie
                angedeutet, während sichtbare Kanten durchgezogen werden.
                <Divider my={"md"} />
            </CheckableHeading>
        </div>
    );
}
