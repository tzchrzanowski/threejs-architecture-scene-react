import { useRef, useState } from "react";

// @ts-ignore
export default function Window(props) {
    const mesh = useRef();
    const [hovered, setHover ] = useState(false);
    const [active, setActive ] = useState(false);

    const glassWidthFinal = props.glassWidth ? props.glassWidth : 0.05;
    const glassLengthFinal = props.glassLength ? props.glassLength : 0.05;
    const glassHeightFinal = props.glassHeight ? props.glassHeight : 2.2;

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
            <boxGeometry args={[glassWidthFinal, glassHeightFinal ,glassLengthFinal]} />
            <meshStandardMaterial color={hovered ? "cyan" : "white"} transparent={true} opacity={0.8} />
        </mesh>
    )
}
