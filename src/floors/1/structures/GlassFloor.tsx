import Pillar from "../../../walls/Pillar";
import Window from "../../../walls/Window";

interface GlassFloorInterface {
    longerAxis: number,
    zAxis: number,
    yAxis: number,
    windowWidth: number,
}

export default function GlassFloor ({longerAxis, zAxis, yAxis, windowWidth}: GlassFloorInterface) {
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
