import React from 'react';
import Wall from "components/simple/Wall";

/*
* Stairs component that is generated with small individual blocks of wall aligned together in pattern.
* */

interface StairsInterface {
    stepsAmount: number,
}

export default function Stairs({stepsAmount}: StairsInterface) {
    const [stepsList, setStepsList] = React.useState<number[]>([]);
    const stepHeight = 0.16;
    const stepDepth = 0.3;
    const stairBlockHeight = 0.1;
    const stairBlockWidth = 1;

    React.useEffect(() => {
        let newList = [];
        for (let i = 0; i< stepsAmount; i++) {
            newList.push(i);
        }
        setStepsList(newList);
    }, []);

    React.useEffect(()=> {
        console.log(stepsList);
    }, [stepsList])

    // const renderStep = (id: number) => {
    //
    //     return (
    //         <Wall position={[4.5, 1, 6.7]} wallWidth={1} wallHeight={0.1} wallLength={0.3} key={id}/>
    //     )
    // }

    return (
        <>
            {/*{stepsList.map((step, id) => {*/}
            {/*    return (*/}
            {/*        <Wall position={[4.5, 1, 6.7]} wallWidth={1} wallHeight={0.1} wallLength={0.3} key={id}/>*/}
            {/*    )*/}
            {/*})}*/}
            <Wall position={[4.5, 1, 6.7]} wallWidth={1} wallHeight={0.1} wallLength={0.3} />
            <Wall position={[4.5, 0.84, 6.4]} wallWidth={1} wallHeight={0.1} wallLength={0.3} />
            <Wall position={[4.5, 0.68, 6.1]} wallWidth={1} wallHeight={0.1} wallLength={0.3} />
            <Wall position={[4.5, 0.52, 5.8]} wallWidth={1} wallHeight={0.1} wallLength={0.3} />
            <Wall position={[4.5, 0.36, 5.5]} wallWidth={1} wallHeight={0.1} wallLength={0.3} />
            <Wall position={[4.5, 0.20, 5.2]} wallWidth={1} wallHeight={0.1} wallLength={0.3} />
            <Wall position={[4.5, 0.02, 4.9]} wallWidth={1} wallHeight={0.1} wallLength={0.3} />
            <Wall position={[4.5, -0.14, 4.6]} wallWidth={1} wallHeight={0.1} wallLength={0.3} />
            <Wall position={[4.5, -0.30, 4.3]} wallWidth={1} wallHeight={0.1} wallLength={0.3} />
            <Wall position={[4.5, -0.46, 4]} wallWidth={1} wallHeight={0.1} wallLength={0.3} />
            <Wall position={[4.5, -0.62, 3.7]} wallWidth={1} wallHeight={0.1} wallLength={0.3} />
            <Wall position={[4.5, -0.78, 3.4]} wallWidth={1} wallHeight={0.1} wallLength={0.3} />
            <Wall position={[4.5, -0.94, 3.1]} wallWidth={1} wallHeight={0.1} wallLength={0.3} />
        </>
    )
}
