import { Field, reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login, logout } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css";

const LoginForm = ({handleSubmit, error}) => {
   return <form onSubmit={handleSubmit}>
         <div>
            {createField("Email", "email", [required, maxLengthCreator(100)], Input)}
         </div>
         <div>
            {createField("Password", "password", [required, maxLengthCreator(100)], Input, {type: "password"})}
         </div>
         <div>
            {createField(null, "rememberMe", [required, maxLengthCreator(100)], Input, {type: "checkbox"}, "remember me")}
         </div>
         { error &&
            <div className={s.formSummaryError}>
            {error}
         </div>}
         <div>
            <button>Login</button>
         </div>
      </form>
}
const LoginReduxForm = reduxForm({form:'login'})(LoginForm);

const Login = ({login, isAuth}) => {
   const onSubmit = (formData) => {
      login(formData.email, formData.password, formData.rememberMe);
   }
   if(isAuth){
      return <Navigate to={"/profile"}/>
   }

   return <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
   </div>
}
const mapStateToProps = (state) => ({
   isAuth: state.authReducer.isAuth
})
export default connect(mapStateToProps, {login, logout} )(Login);