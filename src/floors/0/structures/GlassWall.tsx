import Pillar from "../../../components/simple/Pillar";
import Window from "../../../components/simple/Window";

export default function GlassWall() {
    return (
        <>
            <Pillar position={[0.15, 0, 8]} />
            <Window position={[0.5, 0, 8]} glassWidth={1} />
            <Pillar position={[1, 0, 8]} />
            <Window position={[1.5, 0, 8]} glassWidth={1} />
            <Pillar position={[2, 0, 8]} />
            <Window position={[2.5, 0, 8]} glassWidth={1} />
            <Pillar position={[3, 0, 8]} />
            <Window position={[3.5, 0, 8]} glassWidth={1} />
            <Pillar position={[4, 0, 8]} />
            <Window position={[4.5, 0, 8]} glassWidth={1} />
            <Pillar position={[4.88, 0, 8]} />
        </>
    )
}
