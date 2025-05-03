import React from 'react';

const IconSwitch = ({ icon, onSwitch }) => (
    <div className="icon-switch">
        <i className="material-icons" onClick={onSwitch}>
            {icon}
        </i>
    </div>
);

export default IconSwitch;