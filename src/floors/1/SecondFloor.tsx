import Floor_1 from "./structures/Floor_1";
import OuterWallsFloor from "./structures/OuterWallsFloor";
import GlassFloor from "./structures/GlassFloor";

export default function SecondFloor () {
    return (
        <>
            <Floor_1 />
            <OuterWallsFloor />
            <GlassFloor />
        </>
    )
}
