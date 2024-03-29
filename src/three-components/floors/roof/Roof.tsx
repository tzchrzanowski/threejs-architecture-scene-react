import Floor from 'three-components/simple/Floor';

export default function Roof() {
    return (
        <>
            <Floor position={[2.5,3.2,1.5]} wallWidth={5} wallLength={3} wallHeight={0.3} />
            <Floor position={[2.5,3.2,9]} wallWidth={5} wallLength={4} wallHeight={0.3} />
        </>
    )
}
