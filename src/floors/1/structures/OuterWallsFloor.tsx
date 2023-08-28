import Pillar from "../../../components/simple/Pillar";
import Wall from "../../../components/simple/Wall";
import Window from "../../../components/simple/Window";

export default function OuterWallsFloor() {
    return (
        <>
            <Wall position={[0, 2.2, 5.5]} wallWidth={0.2} wallHeight={2.2} wallLength={11} props={""} />
            <Wall position={[5, 2.2, 5.5]} wallWidth={0.2} wallHeight={2.2} wallLength={11} props={""} />
            <Wall position={[2.5, 2.2, 11]} wallWidth={5} wallHeight={2.2} wallLength={0.2} props={""} />
            <Wall position={[0.5, 2.2, 0]} wallWidth={1} wallHeight={2.2} wallLength={0.2} />
            <Wall position={[3.5, 2.2, 0]} wallWidth={3} wallHeight={2.2} wallLength={0.2} />
            <Window position={[1.5, 2.2, 0]} glassWidth={1} />
        </>
    );
}
