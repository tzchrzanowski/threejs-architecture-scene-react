import React from 'react';
import "./TopNavigation.css";

interface ButtonsInterface {
    route: string,
    caption: string
}
interface TopNavigationInterface {
    onPageChange: (page: string) => void;
}

export function TopNavigation({onPageChange} : TopNavigationInterface) {
    const buttons: ButtonsInterface[] = [
        {route: "house", caption: "House"},
        {route: "concrete-blocks", caption: "Concrete Blocks"}
    ];

    // const [hovered, setHovered] = React.useState<boolean>(false);
    const [hoveredButtons, setHoveredButtons] = React.useState<boolean[]>(Array(buttons.length).fill(false));



    const handleHover = (index: number, setter: boolean) => {
        const newHoveredButtons = [...hoveredButtons];
        newHoveredButtons[index] = setter;
        setHoveredButtons(newHoveredButtons);
    };

    return (
        <div className={"nav-container"}>
            {buttons && buttons.map((button, id)=>{
                return <div
                    key={id}
                    className={(hoveredButtons[id] ? "isHovered button-box" : "button-box")}
                    onClick={()=> onPageChange(button.route)}
                    onMouseOver={() => handleHover(id, true)}
                    onMouseLeave={() => handleHover(id, false)}
                >{button.caption}</div>
            })}
        </div>
    );
};
