import Pillar from "../../../walls/Pillar";
import Window from "../../../walls/Window";

interface GlassFloorInterface {
    longerAxis: number,
}

export default function GlassFloor ({longerAxis}: GlassFloorInterface) {
    return (
        <>
            <Pillar position={[0.15, 2.1, longerAxis]} />
            <Window position={[1.2, 2.1, longerAxis]} glassWidth={2.4} />
            <Pillar position={[2.4, 2.1, longerAxis]} />
        </>
    )
}
