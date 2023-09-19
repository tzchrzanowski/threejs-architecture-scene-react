import React from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import "./ConcreteBlocks.css";

import {Scene} from "./Scene";
import {TopNavigation} from "../../navigation/top-navigation/TopNavigation";
import {Ground} from "../../components/simple/Ground";

export function ConcreteBlocks() {

    return (
        <>
            <TopNavigation />
            <div className="contentWrapper">
                <Canvas camera={{position :[-4.4666, 13.0365, -10.56165], fov: 60}} shadows>
                    <Scene />
                    <Ground lengthX={20} lengthY={30}/>
                    <OrbitControls minDistance={0} maxDistance={200}/>
                </Canvas>
            </div>
        </>
    )
}

export default ConcreteBlocks;
