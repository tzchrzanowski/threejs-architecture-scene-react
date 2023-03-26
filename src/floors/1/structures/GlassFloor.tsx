import Pillar from "../../../walls/Pillar";
import Window from "../../../walls/Window";

export default function GlassFloor () {
    return (
        <>
            <Pillar position={[0.15, 2.1, 7.1]} />
            <Window position={[1.2, 2.1, 7.1]} glassWidth={2.4} />
            <Pillar position={[2.4, 2.1, 7.1]} />
        </>
    )
}
