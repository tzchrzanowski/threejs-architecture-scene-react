import React from "react";
import Pillar from "components/simple/Pillar";
import Window from "components/simple/Window";


interface GlassWallSectionsInterface {
    zAxis: number,
    yAxis: number,
    startXAxis: number,
    glassWidth: number,
    numberOfElements: number,
}

export default function GlassWallSections({zAxis, yAxis, startXAxis, glassWidth, numberOfElements}: GlassWallSectionsInterface) {
    const [elList, setElList] = React.useState<number[]>([]);
    const [windowsList, setWindowsList] = React.useState<number[]>([]);

    const midPointOfFirstWindow: number = startXAxis + (glassWidth/2);
    const startPointOfFirstPillar: number = startXAxis+ 0.15;

    React.useEffect(() => {
        let newList = [];
        let newWindowsList =[];

        for (let i =0; i < numberOfElements; i++) {
            newList.push(i);
            newWindowsList.push(i+0.1);
        }
        setElList(newList);
        setWindowsList(newWindowsList);
    }, [numberOfElements])

    return (
        <>
            {
                elList.map((nr, id) => {
                                    const lastNr = elList.length-1;
                                    switch (nr) {
                                        case 0:
                                            return (
                                                    <Pillar position={[(startPointOfFirstPillar +  nr), zAxis, yAxis]} key={id} />
                                            )
                                        case lastNr:
                                            return (
                                                    <Pillar position={[(startPointOfFirstPillar + (nr-0.3)), zAxis, yAxis]} key={id} />
                                            )
                                        default:
                                            return (
                                                    <Pillar position={[(startPointOfFirstPillar +  (nr-0.15)), zAxis, yAxis]} key={id} />
                                            )
                                    }
                                })
            }
            {
                elList.map(nr => {
                    const lastNr = elList.length-1;
                    switch (nr) {
                        case 0:
                            return (
                                <Window position={[(midPointOfFirstWindow + nr), zAxis, yAxis]} glassWidth={glassWidth} key={windowsList[nr]}/>
                            );
                        case lastNr:
                            return ("");
                        default:
                            return (
                                <Window position={[(midPointOfFirstWindow + nr), zAxis, yAxis]} glassWidth={glassWidth} key={windowsList[nr]}/>
                            );
                    }
                })
            }
        </>
    )
}
