import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
   
   state = {
      editMode: false,
      status: this.props.status
   }

   activateEditMode=()=>{
      this.setState({
         editMode: true,
      })
   }
   deactivateEditMode=()=>{
      this.setState({
         editMode: false,
      })
      this.props.updateStatus(this.state.status);
   }
   onStatusChange=(e)=>{ 
      this.setState({status: e.currentTarget.value});
   }
   render() {
      return <div>
         {!this.state.editMode &&
            <div onDoubleClick={ this.activateEditMode} className={s.status}>
               {this.props.status || "----"}
            </div>
         }
         {this.state.editMode &&
            <div>
               <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode} type="text" value={this.state.status} />
            </div>
         }
      </div>
   }
}

export default ProfileStatus;