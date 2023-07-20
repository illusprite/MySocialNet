import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, Input} from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login, logout } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.scss";
import { AppStateType } from "../../redux/redux-store";

type LoginFormOwnPropsType = {
   captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({ handleSubmit, error, captchaUrl }) => {
   //первый раз в <  , LoginFormOwnPropsType> указываем для библиотеки, а второй раз для пропсов
   return <form onSubmit={handleSubmit}>

      {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
      {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, { type: "password" })}
      {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, { type: "checkbox" }, "remember me")}

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input, {})}
      {error &&
         <div className={s.formSummaryError}>
            {error}
         </div>}
      <div>
         <button>Login</button>
      </div>
   </form>
}
const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({ form: 'login' })(LoginForm);

type MapStatePropsType = {
   captchaUrl: string | null
   isAuth: boolean
}
type MapDispatchPropsType = {
   login: (email: string, password: string, rememberMe: boolean, captcha: string ) => void
   logout: () => void
}


type LoginFormValuesType = {
   email: null | string
   password: null | string
   rememberMe: boolean
   captcha: string | null
}
type LoginFormValuesTypeKeys = keyof LoginFormValuesType

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = ({ login, isAuth, captchaUrl }) => {
   const onSubmit = (formData: any) => {
      login(formData.email, formData.password, formData.rememberMe, formData.captcha);
   }
   if (isAuth) {
      return <Navigate to={"/profile"} />
   }
   return <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
   </div>
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
   captchaUrl: state.authReducer.captchaUrl,
   isAuth: state.authReducer.isAuth
})
export default connect(mapStateToProps, { login, logout })(Login);