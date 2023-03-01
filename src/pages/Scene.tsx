import { useFrame } from '@react-three/fiber';
import LongSideWall from "../walls/longSideWall";
import Wall2m from "../walls/Wall2m";
import Pillar from "../walls/Pillar";

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
            <LongSideWall position={[0, 0, 5.5]} />
            <LongSideWall position={[5, 0, 5.5]} />
            <Wall2m position={[1, 0, 11]} />
            <Wall2m position={[4, 0, 11]} />
            <Pillar position={[0, 0, 0]} />
        </>
    );
};
