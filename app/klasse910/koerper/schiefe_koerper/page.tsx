import { CheckableBlockquote } from "@/components/CheckableBlockquote";
import { CheckableHeading } from "@/components/CheckableHeading";
import Image from "@/components/Image";
import { ImageCaption } from "@/components/ImageCaption";
import { Flex, Mark } from "@mantine/core";
import { BlockMath, InlineMath } from "react-katex";
import { Fragment } from "react/jsx-runtime";

export default function SchiefeKoerper() {
    return <Fragment>
    <CheckableHeading title="Schiefe Körper">Vielleicht weißt du schon, dass das Volumen von geraden und schiefen Prismen identisch ist – solange sie die gleiche Grundfläche und Höhe haben. Das folgt aus dem <b>Prinzip des Cavalieri</b>. 
    Das Prinzip können wir auch auf weitere Körper erweitern, wie z.B. Pyramiden oder Kegel. Aber wie lässt sich dieses „intuitive“ Prinzip beweisen?
    <CheckableBlockquote title="Das Prinzip des Cavalieri" titleOrder={2} icon="exkurs">
                        Das Prinzip besagt, dass zwei Körper das gleiche Volumen besitzen, wenn sie in jeder Höhe die gleiche Schnittfläche besitzen. Vergleichen wir z.B. einen geraden mit einem schiefen Quader, die beide die gleiche Grundflächen wie Höhen haben.
                        <Image width={6000} height={4000} src={"/SchiefeKoerper/Schachteile.webp"} alt="Ein gerader und ein schiefer Stapel aus quadratischen Teilen" />
                        Beide Stapel bestehen aus 10 gleichgroßen Teilstücken. In dem Beispiel sind sie relativ groß, kann man die Scheiben noch gut voneinander unterscheiden. Aber stell dir vor, wir machen sie dünner:
                        <Flex>
                            <ImageCaption
                                h={250}
                                src="/SchiefeKoerper/PapierstapelGerade.webp"
                                width={6000}
                                height={4000}
                                alt="Ein gerader Stapel Papier"
                            >
                                Der Papierstapel ist gerade.
                            </ImageCaption>
                            <ImageCaption
                                h={250}
                                width={6000}
                                height={4000}
                                src={"/SchiefeKoerper/PapierstapelSchief.webp"}
                                alt="Ein schiefer Stapel Papier"
                            >
                                Der Papierstapel ist schief.
                            </ImageCaption>
                        </Flex>
                        Die einzelnen Seiten sind nur schwer voneinander zu unterscheiden – aber beide Stapel haben exakt gleich viele Blätter. Es gilt also auch hier: Beide Stapel haben in der gleichen Höhe den gleichen Flächeninhalt, deshalb haben sie auch das gleiche Volumen.
                    </CheckableBlockquote>
    </CheckableHeading>
    <CheckableHeading title="Schiefe Pyramiden">
        Wie bei einem Prisma kann man auch eine Pyramide in ganz viele Scheiben zerteilen. Das könnte dann z.B. so aussehen:
         <Image
            width={6000}
            height={4000}
            src={"/SchiefeKoerper/GeradePyramide.webp"}
            alt="Eine gerade Pyramide aus vielen Schichten Pappe"
        />
        Verschiebt man nun jede Schicht, so bekommt man eine schiefe Pyramide. Es ist dabei egal, ob die Pyramide danach noch nach einer Pyramide aussieht oder nicht – solange man keine Scheibe herausnimmt, bleibt das Volumen gleich. Denn das Volumen jeder einzelnen Scheibe ändert sich nicht!
        <Flex>
        <Image
            width={6000}
            height={4000}
            src={"/SchiefeKoerper/SchiefePyramide1.webp"}
            alt="Eine schiefe Pyramide aus vielen Schichten Pappe"
            flex={"1 1 400px"}
        />
        <Image
            width={6000}
            height={4000}
            src={"/SchiefeKoerper/SchiefePyramide2.webp"}
            alt="Eine schiefe Pyramide aus vielen Schichten Pappe"
            flex={"1 1 400px"}
        />
        </Flex>
    Damit haben wir einen (visuellen) Beweis, dass der Satz des Cavalieri auch bei Pyramiden funktioniert.
    <CheckableHeading title="Schiefe Kegel">
        Den Beweis für den Satz des Cavalieri können wir uns hier sparen – wir können uns nämlich zu Nutze machen, dass Kegel sehr nah mit den Pyramiden verwandt sind. Im Bild wird gezeigt, wie man durch Erhöhen der Eckenzahl von einer Pyramide zu einem Kegel kommt.
        <Image
            h={325}
            src="/Kegel/PyramidezuKegel.webp"
            width={1650}
            height={650}
            alt="Es sind vier Pyramiden nebeneinander dargestellt. Zuerst mit einer dreieckigen Grundfläche, dann mit einer sechseckigen, zwölfeckigen und vierundzwanzigeckigen. Die letzte Pyramide sieht fast aus wie ein Kegel"
        />
        Ein Kegel ist nichts anderes als eine regelmäßige Pyramide mit unendlich vielen Ecken!
    </CheckableHeading>
    </CheckableHeading>
    //TODO - Aufgaben hinzufügen!
    </Fragment>
}
