import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalButton=(props)=>{
    return ReactDOm.createPortal(
        <div>
            <button id="button" onClick={props.onClick}>Click</button>
        </div>,
        document.getElementById('portal-button')
        
    );
}
export default PortalButton;

//portal-button id will be used here for portal purpose
