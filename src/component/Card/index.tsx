import React from "react";

const ButtonView: React.FC = (props) => {
    return (
        <button >{props.children}</button>
    )
}

export default ButtonView;