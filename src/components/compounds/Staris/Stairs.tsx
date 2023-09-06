import React from 'react';
import Wall from "components/simple/Wall";

/*
* Stairs component that is generated with small individual blocks of wall aligned together in pattern.
* */

interface StairsInterface {
    stepsAmount: number,
    startX: number,
    startY: number,
    startZ: number,
}

export default function Stairs({stepsAmount, startX, startY, startZ}: StairsInterface) {
    const [stepsList, setStepsList] = React.useState<number[]>([]);
    const stepHeight = 0.16;
    const stepDepth = 0.3;
    const stairBlockHeight = 0.1;
    const stairBlockWidth = 1;
    const stairBlockLength = 0.3;

    React.useEffect(() => {
        let newList = [];
        for (let i = 0; i< stepsAmount; i++) {
            newList.push(i);
        }
        setStepsList(newList);
    }, []);

    React.useEffect(()=> {
    }, [stepsList])

    return (
        <>
            {stepsList.map((step, id) => {
                const currentHeight = startZ - (stepHeight * step);
                const currentDepth = startY - (stepDepth * step);

                return (
                    <Wall position={[startX, currentHeight, currentDepth ]} wallWidth={stairBlockWidth} wallHeight={stairBlockHeight} wallLength={stairBlockLength} key={id}/>
                )
            })}
        </>
    )
}
