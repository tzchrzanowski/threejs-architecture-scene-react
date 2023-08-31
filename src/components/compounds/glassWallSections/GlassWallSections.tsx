import Pillar from "../../../components/simple/Pillar";
import Window from "../../../components/simple/Window";

interface GlassWallSectionsInterface {
    zAxis: number,
}

export default function GlassWallSections({zAxis}: GlassWallSectionsInterface) {
    return (
        <>
            <Pillar position={[0.15, zAxis, 8]} />
            <Window position={[0.5, zAxis, 8]} glassWidth={1} />
            <Pillar position={[1, zAxis, 8]} />
            <Window position={[1.5, zAxis, 8]} glassWidth={1} />
            <Pillar position={[2, zAxis, 8]} />
            <Window position={[2.5, zAxis, 8]} glassWidth={1} />
            <Pillar position={[3, zAxis, 8]} />
            <Window position={[3.5, zAxis, 8]} glassWidth={1} />
            <Pillar position={[4, zAxis, 8]} />
            <Window position={[4.5, zAxis, 8]} glassWidth={1} />
            <Pillar position={[4.88, zAxis, 8]} />
        </>
    )
}
