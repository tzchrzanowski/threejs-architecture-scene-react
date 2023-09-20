import Wall from "three-components/simple/Wall";
import {Elements} from "data/Elements";
import WindowWIthFrame from "three-components/compounds/windowWithFrame/windowWithFrame";

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
        </>
    );
};
