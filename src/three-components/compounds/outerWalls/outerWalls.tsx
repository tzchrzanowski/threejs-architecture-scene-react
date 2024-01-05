import Pillar from "three-components/simple/Pillar";
import Wall from "three-components/simple/Wall";
import Window from "three-components/simple/Window";

interface OuterWallsInterface {
    zAxis: number,
    isCrossSection? : boolean,
}

export default function OuterWalls({zAxis, isCrossSection}: OuterWallsInterface) {
    return (
        <>
            {!isCrossSection && <Wall position={[0, zAxis, 5.5]} wallWidth={0.2} wallHeight={2.2} wallLength={11} props={""} clickable={true} hoverable={true}/>}
            <Wall position={[5, zAxis, 5.5]} wallWidth={0.2} wallHeight={2.2} wallLength={11} props={""} />
            <Wall position={[1, zAxis, 11]} wallWidth={2} wallHeight={2.2} wallLength={0.2} props={""} />
            <Wall position={[4, zAxis, 11]} wallWidth={2} wallHeight={2.2} wallLength={0.2} props={""} />
            <Pillar position={[0, zAxis, 0]} />
            <Wall position={[0.5, zAxis, 0]} wallWidth={1} wallHeight={2.2} wallLength={0.2} />
            <Wall position={[3.5, zAxis, 0]} wallWidth={3} wallHeight={2.2} wallLength={0.2} />
            <Window position={[1.5, zAxis, 0]} glassWidth={1} />
            <Window position={[2.5, zAxis, 11]} glassWidth={1} />
        </>
    );
}
