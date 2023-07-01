import { Field, reduxForm } from "redux-form";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login, logout } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
   return <form onSubmit={handleSubmit}>

      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, { type: "password" })}
      {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
      {error &&
         <div className={s.formSummaryError}>
            {error}
         </div>}
      <div>
         <button>Login</button>
      </div>
   </form>
}
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = ({ login, isAuth, captchaUrl }) => {
   debugger
   const onSubmit = (formData) => {
      login(formData.email, formData.password, formData.rememberMe);
   }
   if (isAuth) {
      return <Navigate to={"/profile"} />
   }
   return <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
   </div>
}
const mapStateToProps = (state) => ({
   captchaUrl: state.authReducer.captchaUrl,
   isAuth: state.authReducer.isAuth
})
export default connect(mapStateToProps, { login, logout })(Login);