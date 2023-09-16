import { useFrame } from '@react-three/fiber';

import GroundFloor from "../floors/0/GroundFloor";
import SecondFloor from "../floors/1/SecondFloor";
import Roof from "../floors/roof/Roof";

export const Scene = () => {
    return (
        <>
            {/* Scene setup: */}
            <ambientLight intensity={0.1}/>
            <pointLight
                position={[-10, 10, 10]}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
            {/* floors: */}
            <GroundFloor/>
            <SecondFloor/>
            <Roof/>
        </>
    );
};
