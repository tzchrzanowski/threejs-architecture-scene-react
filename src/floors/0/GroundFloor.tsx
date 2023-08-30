import GlassWall from "./structures/GlassWall";
import Stairs from "./structures/Stairs";
import Floor_0 from "./structures/Floor_0";
import OuterWalls from "components/compounds/outerWalls/outerWalls";

export default function GroundFloor() {
    return (
        <>
            <OuterWalls zAxis={0} />
            <GlassWall />
            <Stairs />
            <Floor_0 />
        </>
    )
}
