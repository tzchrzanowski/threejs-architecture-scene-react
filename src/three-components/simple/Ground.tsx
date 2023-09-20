interface GroundInterface {
    lengthX: number,
    lengthY: number;
}

export function Ground ({lengthX, lengthY}: GroundInterface) {
    return (
        <mesh
            castShadow
            receiveShadow
            position={[0, -1, 0]}
            rotation={[-Math.PI/2, 0, 0]}
        >
            <planeGeometry args={[lengthX, lengthY, 1, 1]}/>
            <shadowMaterial opacity={0.4}/>
            <meshStandardMaterial color={"gray"} />
        </mesh>
    );
}
