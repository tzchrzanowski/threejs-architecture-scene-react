import React, { useRef, useState } from "react";
import {RepeatWrapping, sRGBEncoding, Texture, TextureLoader} from "three";
import textureConcrete from "../../assets/concrete_floor_2.jpg";

// @ts-ignore
export default function Floor(props) {
    // texture related params:
    const loader = new TextureLoader();
    const [textureState, setTextureState] = useState<Texture>();
    const [dataFetched, setDataFetched] = useState<boolean>(false);

    const mesh = useRef();
    const [hovered, setHover ] = useState(false);
    const [active, setActive ] = useState(false);

    const color = props.color || "darkGrey"
    const floorWidthFinal = props.wallWidth ? props.wallWidth : 3;
    const floorLengthFinal = props.wallLength ? props.wallLength : 11;
    const floorHeightFinal = props.wallHeight ? props.wallHeight : 0.3;

    React.useEffect(() => {
        const colorMap: Texture = loader.load(textureConcrete, function(texture: Texture) {
            texture.wrapS = RepeatWrapping;
            texture.wrapT = RepeatWrapping;

            const timesToRepeatHorizontally = 4;
            const timesToRepeatVertically = 4;
            texture.repeat.set(timesToRepeatHorizontally, timesToRepeatVertically);
        });
        colorMap.encoding = sRGBEncoding;
        setTextureState(colorMap);
    }, []);

    /*
    * When textureState gets updated, then component will trigger re-render
    * */
    React.useEffect(()=> {
        setDataFetched(!dataFetched);
    }, [textureState])

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
            {/*<meshStandardMaterial color={props.hoverable && hovered ? "cyan" : color} />*/}
            {textureState && <meshPhysicalMaterial map={textureState}/>}
        </mesh>
    )
}
