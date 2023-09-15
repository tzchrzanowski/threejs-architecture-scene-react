import Floor from 'components/simple/Floor';
import OuterWalls from "components/compounds/outerWalls/outerWalls";
import GlassWallSections from "components/compounds/glassWallSections/GlassWallSections";
import Stairs from 'components/compounds/Staris/Stairs';

export default function GroundFloor() {
    return (
        <>
            {/*ground surrounding the building*/}
            <Floor position={[2.5,-1,5.5]} wallWidth={5} wallLength={11} wallHeight={0.2} hoverable={false} color={"darkGrey"} />

            {/*the building*/}
            <OuterWalls zAxis={0} />
            <GlassWallSections zAxis={0} yAxis={8} startXAxis={0.0} glassWidth={1} numberOfElements={6}/>
            <Stairs stepsAmount={13} startX={4.5} startZ={1} startY={6.7}/>
            <GlassWallSections zAxis={0} yAxis={2.8} startXAxis={0.0} glassWidth={1} numberOfElements={6}/>
            <Floor position={[2.5,-1.1,5.5]} wallWidth={5} wallLength={11} wallHeight={0.3} />
        </>
    )
}
