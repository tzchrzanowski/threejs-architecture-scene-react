import OuterWallsGround from "./structures/OuterWallsGround";
import GlassWall from "./structures/GlassWall";
import Stairs from "./structures/Stairs";
import Floor_0 from "./structures/Floor_0";

export default function GroundFloor() {
    return (
        <>
            <OuterWallsGround />
            <GlassWall />
            <Stairs />
            <Floor_0 />
        </>
    )
}
