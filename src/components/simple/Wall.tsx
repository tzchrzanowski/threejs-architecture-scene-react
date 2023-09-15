import React, { useRef, useState } from "react";
import { Suspense } from 'react'
import {TextureLoader, Texture, RepeatWrapping, MirroredRepeatWrapping} from "three";
import textureConcrete from "../../assets/concrete_new_1.jpg";

import { sRGBEncoding } from "three";

// @ts-ignore
export default function Wall4m(props) {
    const loader = new TextureLoader();

    const mesh = useRef();
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const [transparentState, setTransparentState] = useState<boolean>(false);
    const [opacityState, setOpacityState] = useState<number>(0);
    const [textureState, setTextureState] = useState<Texture>();
    const [dataFetched, setDataFetched] = useState<boolean>(false);

    const color = props.color || "lightGrey";

    const wallWidthFinal = props.wallWidth ? props.wallWidth : 0.2;
    const wallLengthFinal = props.wallLength ? props.wallLength : 0.2;
    const wallHeightFinal = props.wallHeight ? props.wallHeight : 2.2;

    /*
    * On component init, loader will try to get the image from file path
    * 2nd parameter of load texture function is a callback function that is setting up repeating of the used texture.
    * */
    React.useEffect(() => {
        const colorMap: Texture = loader.load(textureConcrete, function(texture: Texture) {
            // texture.wrapS = MirroredRepeatWrapping;
            // texture.wrapT = MirroredRepeatWrapping;
            texture.wrapS = RepeatWrapping;
            texture.wrapT = RepeatWrapping;

            const timesToRepeatHorizontally = props.wallLength < 5 ? 1 : 4; // = 4;
            const timesToRepeatVertically = 1;
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
            setTransparentState(true);
            setOpacityState(0.5);
        }
    }

    return (
        <Suspense fallback={<div>loading..</div>}>
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
                    {textureState && <meshPhysicalMaterial
                        map={textureState}
                    />}
            </mesh>
        </Suspense>
    )
}
