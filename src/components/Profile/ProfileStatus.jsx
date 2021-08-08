import React, { useState, useEffect } from 'react';
import cl from "./Profile.module.scss";

const ProfileStatus = (props) => {
    
    const [editMode, setEditMode] = useState(false);

    const [status, setStatus] = useState(props.status);

    let activateEditMode = () => {
        if (props.userId === undefined) {
            setEditMode(true);
        };
    };

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
        
    }
 
    // useEffect(() => {
    //     if (status !== props.status){
    //         setStatus(props.status);
    //     }
       
    // });
        return (<>
            {!editMode ?
            <div className={cl.status} onDoubleClick={activateEditMode}>Status: {props.status || 'No Satus'}</div> :
            <input value={status} autoFocus={true} className={cl.status} onBlur={deactivateEditMode} onChange={onStatusChange} />}
            </>
        )
    
}

export default ProfileStatus;