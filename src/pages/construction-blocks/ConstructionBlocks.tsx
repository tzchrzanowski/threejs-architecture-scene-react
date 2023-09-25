import React from 'react';
import {Canvas, Vector3} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import "./ConstructionBlocks.css";

import {Scene} from "./Scene";
import {TopNavigation} from "web-components/navigation/top-navigation/TopNavigation";
import {Ground} from "three-components/simple/Ground";
import {Elements} from "../../data/Elements";

interface CoordsXY {
    x: number,
    y: number,
}

interface CoordsXYZ extends CoordsXY {
    z: number,
}

interface Distance {
    min: number,
    max: number,
}

interface ElementParams {
    elementName: keyof Elements,
    position: Vector3,
    lightPosition: CoordsXYZ,
    groundPlatformDimensions: CoordsXY,
    cameraDistanceParams: Distance,
}

const constructionElementsParams: ElementParams[] = [
    {
        elementName: "wall",
        position: [-1.5, 0.3, -8.8],
        lightPosition: {x: -40,z: 22,y: 10},
        groundPlatformDimensions: {x: 20, y: 20},
        cameraDistanceParams: {min: 0, max: 12},
    },
    {
        elementName: "window",
        position: [-1.5, -0.5, -2.5],
        lightPosition: {x: -10,z: 10,y: 15},
        groundPlatformDimensions: {x: 20, y: 20},
        cameraDistanceParams: {min: 0, max: 6},
    },
    {
        elementName: "stairs",
        position: [-1.5, 0.3, -8.8],
        lightPosition: {x: -40,z: 22,y: 10},
        groundPlatformDimensions: {x: 20, y: 20},
        cameraDistanceParams: {min: 0, max: 12},
    },
    {
        elementName: "floor",
        position: [0, 1, 4.8],
        lightPosition: {x: -40,z: 22,y: 10},
        groundPlatformDimensions: {x: 20, y: 20},
        cameraDistanceParams: {min: 0, max: 12},
    },
];

export function ConstructionBlocks() {
    return (
        <>
            <TopNavigation />
            <div className="contentWrapper">
                {constructionElementsParams && constructionElementsParams.map((element, id)=> {
                    return (
                        <div className={"element"} key={id}>
                            <Canvas camera={{position :element.position, fov: 60}} shadows>
                                <Scene renderElement={element.elementName} lightPosition={element.lightPosition} />
                                <Ground lengthX={element.groundPlatformDimensions.x} lengthY={element.groundPlatformDimensions.y}/>
                                <OrbitControls minDistance={element.cameraDistanceParams.min} maxDistance={element.cameraDistanceParams.max}/>
                            </Canvas>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ConstructionBlocks;
