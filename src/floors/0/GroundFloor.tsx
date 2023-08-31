import Stairs from "./structures/Stairs";
import Floor_0 from "./structures/Floor_0";
import OuterWalls from "components/compounds/outerWalls/outerWalls";
import GlassWallSections from "components/compounds/glassWallSections/GlassWallSections";

export default function GroundFloor() {
    return (
        <>
            <OuterWalls zAxis={0} />
            <GlassWallSections zAxis={0} />
            <Stairs />
            <Floor_0 />
        </>
    )
}
