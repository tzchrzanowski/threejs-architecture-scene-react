import React from "react";
import Pillar from "../../../components/simple/Pillar";
import Window from "../../../components/simple/Window";

interface XPositions {
    firstPillarX: number,
    windowX: number,
    secondPillarX: number,
}
interface GlassWallSectionsInterface {
    zAxis: number,
    yAxis: number,
    startXAxis: number,
    glassWidth: number,
    numberOfElements: number,
}

export default function GlassWallSections({zAxis, yAxis, startXAxis, glassWidth, numberOfElements}: GlassWallSectionsInterface) {
    const [currentPos, setCurrentPos] = React.useState({
        firstPillarX: 0,
        windowX: 0,
        secondPillarX: 0,
    });

    React.useEffect(() => {
        const midPointOfFirstWindow: number = startXAxis + (glassWidth/2);
        const startPointOfFirstPillar: number = startXAxis+ 0.15;
        const startPointOfSecondPillar: number = startXAxis + glassWidth + 0.05;
        setCurrentPos({
            firstPillarX: startPointOfFirstPillar,
            windowX: midPointOfFirstWindow,
            secondPillarX: startPointOfSecondPillar
        })
    })
    const printElements= (): JSX.Element | undefined => {
        let iterator = numberOfElements;
        let obj = currentPos;
        let step = iterator;
        while (iterator > 0) {
            iterator --;
            if (step !== iterator) {
                obj = calculateXPosition(obj.firstPillarX, obj.windowX, obj.secondPillarX)
            }
            return (
                <>
                    <Pillar position={[obj.firstPillarX, zAxis, yAxis]} />
                    <Window position={[obj.windowX, zAxis, yAxis]} glassWidth={glassWidth} />
                    <Pillar position={[obj.secondPillarX, zAxis, yAxis]} />
                </>
            );
        }
    };

    const calculateXPosition = (p1X: number, windX: number, p2X: number): XPositions => {
        const obj = {
            firstPillarX: p1X+ 0.9,
            windowX: windX + 1,
            secondPillarX: p2X + 0.9
        }
        return obj;
    }

    return (
        <>
            {printElements()}
            {/*<Pillar position={[0.15, zAxis, yAxis]} />*/}
            {/*<Window position={[0.5, zAxis, yAxis]} glassWidth={glassWidth} />*/}
            {/*<Pillar position={[1.05, zAxis, yAxis]} />*/}
            {/*<Window position={[1.5, zAxis, yAxis]} glassWidth={glassWidth} />*/}
            {/*<Pillar position={[2, zAxis, yAxis]} />*/}
            {/*<Window position={[2.5, zAxis, yAxis]} glassWidth={glassWidth} />*/}
            {/*<Pillar position={[3.05, zAxis, yAxis]} />*/}
            {/*<Window position={[3.5, zAxis, yAxis]} glassWidth={glassWidth} />*/}
            {/*<Pillar position={[4.05, zAxis, yAxis]} />*/}
            {/*<Window position={[4.5, zAxis, yAxis]} glassWidth={glassWidth} />*/}
            {/*<Pillar position={[4.9, zAxis, yAxis]} />*/}
        </>
    )
}
