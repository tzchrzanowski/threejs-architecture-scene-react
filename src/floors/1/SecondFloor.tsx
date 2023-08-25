import Floor_1 from "./structures/Floor_1";
import OuterWallsFloor from "./structures/OuterWallsFloor";
import GlassFloor from "./structures/GlassFloor";

export default function SecondFloor () {
    const northEastGlassWall: number = 7.1;
    const southEastGlassWall: number = 2.9;

    return (
        <>
            <Floor_1 />
            <OuterWallsFloor />
            <GlassFloor longerAxis={northEastGlassWall} />
            <GlassFloor longerAxis={southEastGlassWall} />
        </>
    )
}
