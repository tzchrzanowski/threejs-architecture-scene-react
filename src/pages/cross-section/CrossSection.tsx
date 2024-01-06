import * as THREE from "three"
import React from "react";
import {Environment, OrbitControls} from "@react-three/drei";
import {Canvas, useFrame} from "@react-three/fiber";
import {CrossSectionScene} from "./CrossSectionScene";
import {Ground} from "../../three-components/simple/Ground";
import {TopNavigation} from "../../web-components/navigation/top-navigation/TopNavigation";
import '../Home/Home.css';

/*
* 60 fov to see the inside of the house
* */
export function CrossSection () {
    return (
        <>
            <TopNavigation />
            <div className="App">
                <div className={"home-caption-container"}>
                    Cross Section
                </div>
                <Canvas
                    camera={
                        {
                            position :[-2, 1, 16],
                            fov: 40,
                            view: {
                                enabled: true,
                                fullWidth: 100,
                                fullHeight: 100,
                                offsetX: 25,
                                offsetY: 0,
                                width: 100,
                                height: 100,
                            }
                        }
                    }
                    shadows
                >
                    <fog attach="fog" args={[0xfff0ea, 8, 40]} />
                    <CrossSectionScene />
                    <Ground lengthX={100} lengthY={100}/>
                    <OrbitControls minDistance={0} maxDistance={18}/>
                </Canvas>
            </div>
        </>
    );
}

export default CrossSection;
