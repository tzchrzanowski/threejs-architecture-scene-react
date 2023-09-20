import Pillar from "../../simple/Pillar";
import Window from "../../simple/Window";

interface WindowWithFrameInterface {
    longerAxis: number,
    zAxis: number,
    yAxis: number,
    windowWidth: number,
}

export default function WindowWIthFrame ({longerAxis, zAxis, yAxis, windowWidth}: WindowWithFrameInterface) {
    const pillarPosOne = yAxis - (windowWidth / 2);
    const pillarPosTwo = yAxis + (windowWidth / 2);

    return (
        <>
            <Pillar position={[pillarPosOne, zAxis, longerAxis]} />
            <Window position={[yAxis, zAxis, longerAxis]} glassWidth={windowWidth} />
            <Pillar position={[pillarPosTwo, zAxis, longerAxis]} />
        </>
    )
}
