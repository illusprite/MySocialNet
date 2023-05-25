import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

   state = {
      editMode: false,
      status: this.props.status
   }
   activateEditMode = () => {
      //React не умеет следить за теневыми изменениями, поэтому setState, а не 
      //this.state.editMode = true;
      //setState - метод в React.Component
      //React видит изменения, поэтому происходит обновление 
      this.setState({
         editMode: true,
      })
   }
   deactivateEditMode = () => {
      this.setState({
         editMode: false,
      })
      // 2. Теперь вносим данные в gs
      this.props.updateStatus(this.state.status);
   }
   onStatusChange = (e) => {
      // 1. По 1 символу добавляется в локальный стейт или убирается оттуда
      this.setState({ status: e.currentTarget.value });
   }

   //Мы ждём 2 ответа от сервера - проиль, статус
   //Если первый пришёл статус, всё хорошо, он успел отправиться в ls, проблем нет
   //Но когда сначала прогружается профиль, то вместо статуса мы видим пробел
   //Метод ниже синхронизирует загрузку
   componentDidUpdate(prevProps, prevState) {
      debugger;
      if (prevProps.status !== this.props.status) {
         this.setState({ status: this.props.status });
      }
   }

   render() {
      return <div>
         {!this.state.editMode &&
            <div onDoubleClick={this.activateEditMode} className={s.status}>
               {this.props.status || "----"}
            </div>
         }
         {this.state.editMode &&
            <div>
               <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status} />
            </div>
         }
      </div>
   }
}

export default ProfileStatus;