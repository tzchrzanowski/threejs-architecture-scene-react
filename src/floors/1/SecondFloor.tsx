import Floor_1 from "./structures/Floor_1";
import OuterWallsFloor from "./structures/OuterWallsFloor";
import GlassFloor from "./structures/GlassFloor";

export default function SecondFloor () {
    const zAxisSecondFloor: number = 2.1;

    const xAxisNorth: number = 7.1;
    const xAxisSouth: number = 2.9;

    const yAxisEast: number = 1.2;
    const yAxisWest: number = 4.4;

    const eastWindowWidth: number = 2.4;
    const westWindowWIdth: number = 0.9;
    return (
        <>
            <Floor_1 />
            <OuterWallsFloor />
            {/* east windows */}
            <GlassFloor zAxis={zAxisSecondFloor} yAxis={yAxisEast} longerAxis={xAxisNorth} windowWidth={eastWindowWidth}/>
            <GlassFloor zAxis={zAxisSecondFloor} yAxis={yAxisEast} longerAxis={xAxisSouth} windowWidth={eastWindowWidth}/>

            {/* west windows */}
            <GlassFloor zAxis={zAxisSecondFloor} yAxis={yAxisWest} longerAxis={xAxisNorth} windowWidth={westWindowWIdth}/>
            <GlassFloor zAxis={zAxisSecondFloor} yAxis={yAxisWest} longerAxis={xAxisSouth} windowWidth={westWindowWIdth}/>

        </>
    )
}
