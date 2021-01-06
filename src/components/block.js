import React from "react";


const Block = props => {

    return (
    <div className="block">
        <div className="wrapper">
            <h3>#{props.uid}    {props.title}</h3>
        </div>
        <hr/>
        <div className="message">
            <p>{props.body}</p>
        </div>
        <hr/>
        <div className="row same" >
            <div className="col-sm sol">
                Категория {props.userid}
            </div>
            <div className="col-sm dol">
                22.12.2020
            </div>
        </div>
    </div>
    )
}

export default  Block