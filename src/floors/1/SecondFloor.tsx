import WindowWIthFrame from "components/compounds/windowWithFrame/windowWithFrame";
import OuterWalls from "components/compounds/outerWalls/outerWalls";
import Floor from 'components/simple/Floor';
import Window from "../../components/simple/Window";
import Wall from "../../components/simple/Wall";

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
            {/* room floors: */}
            <Floor position={[2.5,1,1.5]} wallWidth={5} wallLength={3} wallHeight={0.3} />
            <Floor position={[2.5,1,9]} wallWidth={5} wallLength={4} wallHeight={0.3} />

            {/* bridge: */}
            <Floor position={[3.2,1,5]} wallWidth={1.5} wallLength={4} wallHeight={0.3} />
            <Wall position={[2.40, 1.5, 5]} wallWidth={0.1} wallHeight={1} wallLength={4} props={""} />
            <Wall position={[3.95, 1.5, 4.5]} wallWidth={0.1} wallHeight={1} wallLength={3} props={""} />


            {/* outer walls: */}
            <OuterWalls zAxis={2.2}/>

            {/* east windows */}
            <WindowWIthFrame zAxis={zAxisSecondFloor} yAxis={yAxisEast} longerAxis={xAxisNorth} windowWidth={eastWindowWidth}/>
            <WindowWIthFrame zAxis={zAxisSecondFloor} yAxis={yAxisEast} longerAxis={xAxisSouth} windowWidth={eastWindowWidth}/>
            <Window position={[3.2, zAxisSecondFloor, xAxisNorth]} glassWidth={1.5} />

            {/* west windows */}
            <WindowWIthFrame zAxis={zAxisSecondFloor} yAxis={yAxisWest} longerAxis={xAxisNorth} windowWidth={westWindowWIdth}/>
            <WindowWIthFrame zAxis={zAxisSecondFloor} yAxis={yAxisWest} longerAxis={xAxisSouth} windowWidth={westWindowWIdth}/>
            <Window position={[3.2, zAxisSecondFloor, xAxisSouth]} glassWidth={1.5} />


        </>
    )
}
