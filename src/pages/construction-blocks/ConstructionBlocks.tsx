import React from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import "./ConstructionBlocks.css";

import {Scene} from "./Scene";
import {TopNavigation} from "web-components/navigation/top-navigation/TopNavigation";
import {Ground} from "three-components/simple/Ground";

export function ConstructionBlocks() {
    return (
        <>
            <TopNavigation />
            <div className="contentWrapper">
                <div className={"element"}>
                    <Canvas camera={{position :[-1.5, 0.3, -8.8], fov: 60}} shadows>
                        <Scene renderElement={"wall"} lightPosition={{x: -40,z: 22,y: 10}} />
                        <Ground lengthX={20} lengthY={20}/>
                        <OrbitControls minDistance={0} maxDistance={12}/>
                    </Canvas>
                </div>
                <div className={"element"}>
                    <Canvas camera={{position :[-1.5, -0.5, -2.5], fov: 60}} shadows>
                        <Scene renderElement={"window"} lightPosition={{x: -10,z: 10,y: 15}}/>
                        <Ground lengthX={20} lengthY={20}/>
                        <OrbitControls minDistance={0} maxDistance={120}/>
                    </Canvas>
                </div>

            </div>
        </>
    )
}

export default ConstructionBlocks;
