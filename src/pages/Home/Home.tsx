import React from "react";
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Scene} from "./Scene";
import {Ground} from "../../three-components/simple/Ground";
import {TopNavigation} from "../../web-components/navigation/top-navigation/TopNavigation";
import './Home.css';

/*
* 60 fov to see the inside of the house
* */
export function Home () {
    return (
        <>
            <TopNavigation />
            <div className="App">
                <Canvas camera={{position :[-1.5, -0.2, -6], fov: 60}} shadows>
                    <Scene />
                    <Ground lengthX={100} lengthY={100}/>
                    <OrbitControls minDistance={0} maxDistance={200}/>
                </Canvas>
            </div>
        </>

    );
}

export default Home;
