import { useRef, useState } from "react";

// @ts-ignore
export default function Window(props) {
    const mesh = useRef();
    const [hovered, setHover ] = useState(false);
    const [active, setActive ] = useState(false);

    const glassWidthFinal = props.glassWidth ? props.glassWidth : 0.05;
    const glassLengthFinal = props.glassLength ? props.glassLength : 0.05;
    const glassHeightFinal = props.glassHeight ? props.glassHeight : 2.2;

    const clicked = () => {
        if(props.clickable == true){
            setActive(!active)
        }
    }

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event)=> clicked()}
            onPointerOver={(event)=> setHover(true)}
            onPointerOut={(event)=> setHover(false)}
            castShadow
        >
            <boxGeometry args={[glassWidthFinal, glassHeightFinal ,glassLengthFinal]} />
            <meshPhysicalMaterial roughness={0.1} transmission={0.9} thickness={0.1}/>
        </mesh>
    )
}
