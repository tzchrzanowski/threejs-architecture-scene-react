import React from "react";
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Scene} from "./Scene";
import {Ground} from "../components/simple/Ground";

/*
* 60 fov to see the inside of the house
* */
export function Home () {
    return (
        <div className="App">
            <Canvas camera={{position :[-4.4666, 13.0365, -10.56165], fov: 60}} shadows>
                <Scene />
                <Ground />
                <OrbitControls minDistance={0} maxDistance={200}/>
            </Canvas>
        </div>
    );
}
