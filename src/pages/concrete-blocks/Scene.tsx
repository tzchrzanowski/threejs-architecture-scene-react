import { useFrame } from '@react-three/fiber';

import GroundFloor from "../../floors/0/GroundFloor";

export const Scene = () => {
    return (
        <>
            {/* Scene setup: */}
            <ambientLight intensity={0.1}/>
            <pointLight
                // position={[-10, 10, 10]}
                position={[-4, 22, 10]} // shadow on stairs
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
            {/* floors: */}
        </>
    );
};
