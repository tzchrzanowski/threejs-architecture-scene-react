import { useRef, useState } from "react";

// @ts-ignore
export default function Pillar(props) {
    const mesh = useRef();
    const [hovered, setHover ] = useState(false);
    const [active, setActive ] = useState(false);

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
            <boxGeometry args={[0.1, 2.5 ,0.1]} />
            <meshStandardMaterial color={hovered ? "cyan" : "black"} />
        </mesh>
    )
}
