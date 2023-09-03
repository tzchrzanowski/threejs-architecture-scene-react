// import Stairs from "./structures/Stairs";
import Floor_0 from "./structures/Floor_0";
import OuterWalls from "components/compounds/outerWalls/outerWalls";
import GlassWallSections from "components/compounds/glassWallSections/GlassWallSections";
import Stairs from 'components/compounds/Staris/Stairs';

export default function GroundFloor() {
    return (
        <>
            <OuterWalls zAxis={0} />
            <GlassWallSections zAxis={0} yAxis={8} startXAxis={0.0} glassWidth={1} numberOfElements={6}/>
            <Stairs stepsAmount={13} />
            <GlassWallSections zAxis={0} yAxis={2.8} startXAxis={0.0} glassWidth={1} numberOfElements={6}/>
            <Floor_0 />
        </>
    )
}
