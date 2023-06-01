import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login, logout } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
   return <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={"Email"} name="email" validate={[required, maxLengthCreator(100)]} component={Input}/>
         </div>
         <div>
            <Field placeholder={"Password"} name="password" validate={[required, maxLengthCreator(100)]} component={Input} type={"password"}/>
         </div>
         <div>
            <Field type={"checkbox"} name="rememberMe" validate={[required, maxLengthCreator(100)]} component={Input}/> remember me
         </div>
         <div>
            <button>Login</button>
         </div>
      </form>
}
const LoginReduxForm = reduxForm({form:'login'})(LoginForm);

const Login = (props) => {
   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe);
   }
   if(props.isAuth){
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