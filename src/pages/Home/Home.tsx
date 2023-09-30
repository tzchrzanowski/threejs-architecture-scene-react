import * as THREE from "three"
import React from "react";
import {Environment, OrbitControls} from "@react-three/drei";
import {Canvas, useFrame} from "@react-three/fiber";
import {Scene} from "./Scene";
import {Ground} from "../../three-components/simple/Ground";
import {TopNavigation} from "../../web-components/navigation/top-navigation/TopNavigation";
import './Home.css';

// @ts-ignore
function Rig({ children }) {
    const outer = React.useRef<THREE.Group>(null!)
    const inner = React.useRef<THREE.Group>(null!)
    useFrame(({ camera, clock }) => {
        const t = clock.getElapsedTime()
        outer.current.position.y = THREE.MathUtils.lerp(outer.current.position.y, 0, 0.05)
        inner.current.rotation.y = Math.sin(t / 8) * Math.PI
        // inner.current.position.z = 10 + -Math.sin(t / 2) * 5
        // inner.current.position.y = -5 + Math.sin(t / 2) * 2
    })
    return (
        <group position={[0, 0, 5]} ref={outer}>
            <group ref={inner}>{children}</group>
        </group>
    )
}

/*
* 60 fov to see the inside of the house
* */
export function Home () {
    return (
        <>
            <TopNavigation />
            <div className="App">
                <Canvas camera={{position :[-1.5, -0.2, -6], fov: 60}} shadows>
                    <fog attach="fog" args={[0xfff0ea, 8, 40]} />
                    <Rig>
                        <Scene />
                        <Ground lengthX={100} lengthY={100}/>
                    </Rig>
                    <OrbitControls minDistance={0} maxDistance={18}/>
                </Canvas>
            </div>
        </>
    );
}

export default Home;
