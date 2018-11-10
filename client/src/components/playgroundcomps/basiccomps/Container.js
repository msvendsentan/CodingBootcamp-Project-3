import React from "react";

const style = {
    container: {
        marginTop: "30px",
        borderRadius: "5px",
        padding: "15px"
    }
}

const Container = props => (
    <div className="container" style={style.container}>
        <h4>{props.title}</h4>
        {props.children}
    </div>
);

export default Container;