import * as React from "react";

const MessageBar = ({ message }: { message?: string}) => {
    if (message == null)
        return null;
    return ( 
    <div className="ui negative message">
        <i className="close icon"></i>
        <div className="header">
           Error
        </div>
        <p>
            { message }
        </p>
    </div>)
}

export default MessageBar;