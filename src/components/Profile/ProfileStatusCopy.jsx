import React from 'react';
import cl from "./Profile.module.scss";

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        if (this.props.userId===undefined) {
            this.setState({
                editMode: true
            })
        };
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    changeState = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    



    render(){
        return (<>
            {!this.state.editMode ?
            <div className={cl.status} onDoubleClick={this.activateEditMode}>Status: {this.props.status || 'No Satus'}</div> :
            <input value={this.state.status} onBlur={this.deactivateEditMode} autoFocus={true} className={cl.status}
            onChange={this.changeState}/>}
            </>
        )
    }
}

export default ProfileStatus;