import WindowWIthFrame from "components/compounds/windowWithFrame/windowWithFrame";
import OuterWalls from "components/compounds/outerWalls/outerWalls";
import Floor from 'components/simple/Floor';

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
            <Floor position={[2.5,1,1.5]} wallWidth={5} wallLength={3} wallHeight={0.3} />
            <Floor position={[2.5,1,9]} wallWidth={5} wallLength={4} wallHeight={0.3} />
            <Floor position={[3.2,1,5]} wallWidth={1.5} wallLength={4} wallHeight={0.3} />
            <OuterWalls zAxis={2.2}/>
            {/* east windows */}
            <WindowWIthFrame zAxis={zAxisSecondFloor} yAxis={yAxisEast} longerAxis={xAxisNorth} windowWidth={eastWindowWidth}/>
            <WindowWIthFrame zAxis={zAxisSecondFloor} yAxis={yAxisEast} longerAxis={xAxisSouth} windowWidth={eastWindowWidth}/>

            {/* west windows */}
            <WindowWIthFrame zAxis={zAxisSecondFloor} yAxis={yAxisWest} longerAxis={xAxisNorth} windowWidth={westWindowWIdth}/>
            <WindowWIthFrame zAxis={zAxisSecondFloor} yAxis={yAxisWest} longerAxis={xAxisSouth} windowWidth={westWindowWIdth}/>

        </>
    )
}
