import React, { useRef, useState } from "react";
import { TextureLoader, Texture } from "three";
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
    const [transparentState, setTransparentState] = useState<boolean>(false);
    const [opacityState, setOpacityState] = useState<number>(0);
    const [textureState, setTextureState] = useState<Texture>();

    const color = props.color || "lightGrey";

    const wallWidthFinal = props.wallWidth ? props.wallWidth : 0.2;
    const wallLengthFinal = props.wallLength ? props.wallLength : 0.2;
    const wallHeightFinal = props.wallHeight ? props.wallHeight : 2.2;

    React.useEffect(()=> {
        const loader = new TextureLoader();
        const texture = loader.load('https://th.bing.com/th/id/OIP.ykkHrhIi-h54lF6g5EyLdwHaE9?pid=ImgDet&rs=1');
        setTextureState(texture);
        console.log("textureState: ", texture);
    },[]);


    const clicked = () => {
        if(props.clickable == true){
            // setActive(!active)
            setTransparentState(true);
            setOpacityState(0.5);
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
            receiveShadow
            transparent={transparentState}
            opacity={opacityState}
        >
            <boxGeometry args={[wallWidthFinal, wallHeightFinal ,wallLengthFinal]} />
            <meshStandardMaterial
                // color={props.hoverable && hovered ? "cyan" : color}
                // color={"0xFF8844"}
                map={textureState}
            />
        </mesh>
    )
}
