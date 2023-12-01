import { useEffect, useState } from "react";
import { render } from "@testing-library/react";

const MousePosition = ({render}) => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(()=> {
        const handleMousePositionChange = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };
        window.addEventListener("mousemove", handleMousePositionChange);
        return () => {
            window.removeEventListener("mousemove", handleMousePositionChange);
        };
    },[]);
    return render({ mousePosition });
};

const PanelMouseLogger = ({mousePosition}) => {
    return (
        <div>
            <p>Mouse position:</p>
            <MousePosition 
                render={({ mousePosition }) => (
                    <div>
                        <span className="pr-4">x: {mousePosition.x}</span>
                        <span>y: {mousePosition.y}</span>
                    </div>
                )}
            />
        </div>
    );
};

const PointMouseLogger = ({mousePosition}) => {
    return (
        <MousePosition 
            render={({ mousePosition }) => (
                <p>
                    ({mousePosition.x}, {mousePosition.y})
                </p>
            )}
        />
    )
};

const ShowMousePosition = () => {
    return (
        <div className="border p-10 m-10 text-2xl">
            <head>Mouse position</head>
            <PanelMouseLogger />
            <PointMouseLogger />
        </div>
    )
}

export default ShowMousePosition;