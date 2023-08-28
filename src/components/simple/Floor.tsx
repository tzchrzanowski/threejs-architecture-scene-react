import { useRef, useState } from "react";

// @ts-ignore
export default function Floor(props) {
    const mesh = useRef();
    const [hovered, setHover ] = useState(false);
    const [active, setActive ] = useState(false);

    const floorWidthFinal = props.wallWidth ? props.wallWidth : 3;
    const floorLengthFinal = props.wallLength ? props.wallLength : 11;
    const floorHeightFinal = props.wallHeight ? props.wallHeight : 0.3;

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event)=> setActive(!active)}
            onPointerOver={(event)=> setHover(true)}
            onPointerOut={(event)=> setHover(false)}
            castShadow
        >
            <boxGeometry args={[floorWidthFinal, floorHeightFinal ,floorLengthFinal]} />
            <meshStandardMaterial color={hovered ? "cyan" : "darkGray"} />
        </mesh>
    )
}
