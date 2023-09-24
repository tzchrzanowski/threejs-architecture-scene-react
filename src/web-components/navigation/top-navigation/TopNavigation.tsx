import React from 'react';
import "./TopNavigation.css";
import { Link } from "react-router-dom";

interface ButtonsInterface {
    route: string,
    caption: string
}

const buttons: ButtonsInterface[] = [
    {route: "/", caption: "House"},
    {route: "/construction-blocks", caption: "Construction Blocks"}
];

export function TopNavigation() {
    const [hoveredButtons, setHoveredButtons] = React.useState<boolean[]>(Array(buttons.length).fill(false));

    const handleHover = (index: number, setter: boolean) => {
        const newHoveredButtons = [...hoveredButtons];
        newHoveredButtons[index] = setter;
        setHoveredButtons(newHoveredButtons);
    };

    return (
        <div className={"nav-container"}>
            {buttons && buttons.map((button, id)=>{
                return <Link to={button.route} key={id}>
                <div
                    className={(hoveredButtons[id] ? "isHovered button-box" : "button-box")}
                    onMouseOver={() => handleHover(id, true)}
                    onMouseLeave={() => handleHover(id, false)}
                >{button.caption}</div>
                </Link>
            })}
        </div>
    );
};
