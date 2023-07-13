import { useEffect, useState } from 'react';
import s from './ProfileInfo.module.scss';

const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect( ()=> {
      setStatus(props.stauts);
   }, [props.stauts]);

   const activateEditMode = () => {
      setEditMode(true);
   }
   const deactivateEditMode = () => {
      setEditMode(false);
      props.updateStatus(status);
   }
   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value);
   }
   return <div>
      
      {//Если слева ложь, то дальше, не пойдёт, т.к. в лог. операции всё равно будет ложь
      !editMode &&
         <div onDoubleClick={activateEditMode} className={s.profile__status}>
            {props.status || "----"}
         </div>
      }
      {editMode &&
         <div>
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} type="text" value={status} />
         </div>
      }
   </div>

}

export default ProfileStatusWithHooks;