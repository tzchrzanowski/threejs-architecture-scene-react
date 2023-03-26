import Floor from "../walls/Floor";

export default function UpperFloor() {
    return (
        <>
            <Floor position={[2.5,1,1.5]} wallWidth={5} wallLength={3} wallHeight={0.3} />
            <Floor position={[2.5,1,9]} wallWidth={5} wallLength={4} wallHeight={0.3} />
        </>
    );
}

