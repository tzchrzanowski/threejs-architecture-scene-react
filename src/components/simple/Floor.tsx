import { useRef, useState } from "react";

// @ts-ignore
export default function Floor(props) {
    const mesh = useRef();
    const [hovered, setHover ] = useState(false);
    const [active, setActive ] = useState(false);

    const color = props.color || "darkGrey"
    const floorWidthFinal = props.wallWidth ? props.wallWidth : 3;
    const floorLengthFinal = props.wallLength ? props.wallLength : 11;
    const floorHeightFinal = props.wallHeight ? props.wallHeight : 0.3;

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
            onClick={(event)=> clicked}
            onPointerOver={(event)=> setHover(true)}
            onPointerOut={(event)=> setHover(false)}
            castShadow
            receiveShadow
        >
            <boxGeometry args={[floorWidthFinal, floorHeightFinal ,floorLengthFinal]} />
            <meshStandardMaterial color={props.hoverable && hovered ? "cyan" : color} />
        </mesh>
    )
}
