import Wall from "three-components/simple/Wall";
import {Elements} from "data/Elements";
import WindowWIthFrame from "three-components/compounds/windowWithFrame/windowWithFrame";
import Stairs from 'three-components/compounds/Staris/Stairs';
import Floor from "three-components/simple/Floor";

interface LightPosition {
    x: number,
    z: number,
    y: number,
}

interface ConstructionBlocksSceneInterface {
    renderElement: keyof Elements,
    lightPosition: LightPosition
}

export const Scene = ({renderElement, lightPosition}: ConstructionBlocksSceneInterface) => {
    return (
        <>
            {/* Scene setup: */}
            <ambientLight intensity={0.1}/>
            <pointLight
                position={[lightPosition.x, lightPosition.z, lightPosition.y]} // shadow on stairs
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
            {/* Element: */}
            {(renderElement == "wall") ?
                <Wall position={[0, 0, -1]} wallWidth={0.2} wallHeight={2.2} wallLength={11} props={""} /> : ""
            }

            {(renderElement == "window") ?
                <WindowWIthFrame zAxis={0} yAxis={0} longerAxis={0} windowWidth={2} /> : ""
            }

            {(renderElement == "stairs") ?
                <Stairs stepsAmount={13} startX={0} startZ={1} startY={-5}/> : ""
            }

            {(renderElement == 'floor') ?
                <Floor position={[0,-1.1,0]} wallWidth={5} wallLength={11} wallHeight={0.3} /> : ""
            }
        </>
    );
};
