import Floor from "../walls/Floor";

export default function GroundFloor() {
    return (
        <>
            <Floor position={[2.5,-1.1,5.5]} wallWidth={5} wallLength={11} wallHeight={0.3} />
        </>
    );
}

