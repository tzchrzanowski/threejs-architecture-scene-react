import { useFrame } from '@react-three/fiber';

import Stairs from "../combinedStructures/Stairs";
import GlassWall from "../combinedStructures/GlassWall";
import OuterWallsGround from "../combinedStructures/OuterWallsGround";
import Floor from "../walls/Floor";
import GroundFloor from "../combinedStructures/GroundFloor";
import UpperFloor from "../combinedStructures/UpperFloor";

export const Scene = () => {
    return (
        <>
            {/* Scene setup: */}
            <ambientLight intensity={0.1}/>
            <pointLight
                position={[10, 10, 10]}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
            {/* structures: :*/}
            <OuterWallsGround />
            <GlassWall />
            <Stairs />
            <GroundFloor />
            <UpperFloor />
        </>
    );
};
