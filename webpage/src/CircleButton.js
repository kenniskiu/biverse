import React from "react";
import { Button } from "react-bootstrap";


export function CircleButton(){
    return(
        <div className="center1">
        <button type="button" 
        className="btn-circle"
        >
        <i class="fa fa-arrows-v" aria-hidden="true"></i>
        </button>
        </div>
    )
}
export function ConvertButton(){
    return(
        <div className="center1">
        <Button disabled={true}>
            Connect Wallet
        </Button>
        </div>
    )
}
