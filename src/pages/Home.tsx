import React from "react";
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Scene} from "./Scene";
import {Ground} from "../components/simple/Ground";

export function Home () {

    return (
        <div className="App">
            <Canvas camera={{position :[-4.4666, 13.0365, -10.56165], fov: 20}} shadows>
                <Scene />
                <Ground />
                <OrbitControls minDistance={1} maxDistance={200}/>
            </Canvas>
        </div>
    );
}
