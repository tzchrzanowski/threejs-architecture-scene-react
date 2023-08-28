import React from "react";
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Scene} from "./Scene";
import {Ground} from "../components/simple/Ground";

export function Home () {

    return (
        <div className="App">
            <Canvas camera={{position :[14.4666, 2.0365, 5.56165], fov: 40}} shadows>
                <Scene />
                <Ground />
                <OrbitControls minDistance={1} maxDistance={200}/>
            </Canvas>
        </div>
    );
}
