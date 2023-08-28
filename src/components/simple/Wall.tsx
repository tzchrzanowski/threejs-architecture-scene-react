import { useRef, useState } from "react";

// interface WallArgs {
//     wallWidth: Number;
//     wallLength: Number;
//     wallHeight: Number;
//     position: Number[];
//     props: any;
// }

// export default function Wall4m({wallWidth, wallLength, wallHeight, position, props}) {

// @ts-ignore
export default function Wall4m(props) {
    const mesh = useRef();
    const [hovered, setHover ] = useState(false);
    const [active, setActive ] = useState(false);

    const wallWidthFinal = props.wallWidth ? props.wallWidth : 0.2;
    const wallLengthFinal = props.wallLength ? props.wallLength : 0.2;
    const wallHeightFinal = props.wallHeight ? props.wallHeight : 2.2;

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
            <boxGeometry args={[wallWidthFinal, wallHeightFinal ,wallLengthFinal]} />
            <meshStandardMaterial color={hovered ? "cyan" : "lightGray"} />
        </mesh>
    )
}
