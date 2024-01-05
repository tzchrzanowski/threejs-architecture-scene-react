import { useFrame } from '@react-three/fiber';

import GroundFloor from "../../three-components/floors/0/GroundFloor";
import SecondFloor from "../../three-components/floors/1/SecondFloor";
import Roof from "../../three-components/floors/roof/Roof";
import React from "react";

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
            <GroundFloor />
            <SecondFloor/>
            <Roof/>
        </>
    );
};
