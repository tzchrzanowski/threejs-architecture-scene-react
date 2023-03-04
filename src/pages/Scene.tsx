import { useFrame } from '@react-three/fiber';
import Pillar from "../walls/Pillar";
import Wall from "../walls/Wall";
import Window from "../walls/Window";
import Stairs from "../combinedStructures/Stairs";

export const Scene = () => {
    return (
        <>
            <ambientLight intensity={0.1}/>
            <pointLight
                position={[10, 10, 10]}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
            {/*outer walls:*/}
            <Wall position={[0, 0, 5.5]} wallWidth={0.2} wallHeight={2.2} wallLength={11} props={""} />
            <Wall position={[5, 0, 5.5]} wallWidth={0.2} wallHeight={2.2} wallLength={11} props={""} />
            <Wall position={[1, 0, 11]} wallWidth={2} wallHeight={2.2} wallLength={0.2} props={""} />
            <Wall position={[4, 0, 11]} wallWidth={2} wallHeight={2.2} wallLength={0.2} props={""} />
            <Pillar position={[0, 0, 0]} />
            <Wall position={[0.5, 0, 0]} wallWidth={1} wallHeight={2.2} wallLength={0.2} />
            <Wall position={[3.5, 0, 0]} wallWidth={3} wallHeight={2.2} wallLength={0.2} />
            <Window position={[1.5, 0, 0]} glassWidth={1} />
            {/* inner walls groundFloor:*/}
            <Window position={[0.5, 0, 8]} glassWidth={1} />
            <Pillar position={[1, 0, 8]} />
            <Window position={[1.5, 0, 8]} glassWidth={1} />
            <Pillar position={[2, 0, 8]} />
            <Window position={[2.5, 0, 8]} glassWidth={1} />
            <Pillar position={[3, 0, 8]} />
            <Window position={[3.5, 0, 8]} glassWidth={1} />
            {/* stairs */}
            <Stairs />
        </>
    );
};
