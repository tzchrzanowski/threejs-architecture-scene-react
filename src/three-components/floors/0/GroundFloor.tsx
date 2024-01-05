import Floor from 'three-components/simple/Floor';
import OuterWalls from "three-components/compounds/outerWalls/outerWalls";
import GlassWallSections from "three-components/compounds/glassWallSections/GlassWallSections";
import Stairs from 'three-components/compounds/Staris/Stairs';
import WindowWIthFrame from "../../compounds/windowWithFrame/windowWithFrame";

interface GroundFloorProps {
        isCrossSection?: boolean
}

export default function GroundFloor({isCrossSection}: GroundFloorProps) {
    return (
        <>
            {/*ground surrounding the building*/}
            <Floor position={[2.5,-1,5.5]} wallWidth={5} wallLength={11} wallHeight={0.2} hoverable={false} color={"darkGrey"} />
            {/*the building*/}
            <OuterWalls zAxis={0} isCrossSection={isCrossSection}/>
            <GlassWallSections zAxis={0} yAxis={8} startXAxis={0.0} glassWidth={1} numberOfElements={6}/>
            <Stairs stepsAmount={13} startX={4.5} startZ={1} startY={6.7}/>
            <GlassWallSections zAxis={0} yAxis={2.8} startXAxis={0.0} glassWidth={1} numberOfElements={6}/>
            <Floor position={[2.5,-1.1,5.5]} wallWidth={5} wallLength={11} wallHeight={0.3} />
            <WindowWIthFrame longerAxis={0} yAxis={1.52} zAxis={0} windowWidth={1}/>
            <WindowWIthFrame longerAxis={11} yAxis={2.5} zAxis={0} windowWidth={1}/>

            {/* Light south room */}
            <ambientLight intensity={0.01}/>![](../../../../../../imgs/SCREENSHOTS/Screenshot 2023-09-16 at 08.47.39.png)
            <pointLight
                position={[2, 0.5, 2]}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />

            {/* Light north room */}
            <ambientLight intensity={0.01}/>
            <pointLight
                position={[2, 0.5, 9]}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />
        </>
    )
}
