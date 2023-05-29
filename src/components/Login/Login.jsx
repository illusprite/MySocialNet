import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const LoginForm = (props) => {
   return <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={"Login"} name="login" validate={[required, maxLengthCreator(10)]} component={Input}/>
         </div>
         <div>
            <Field placeholder={"Password"} name="password" validate={[required, maxLengthCreator(10)]} component={Input}/>
         </div>
         <div>
            <Field type={"checkbox"} name="rememberMe" validate={[required, maxLengthCreator(10)]} component={Input}/> remember me
         </div>
         <div>
            <button>Login</button>
         </div>
      </form>
}
const LoginReduxForm = reduxForm({form:'login'})(LoginForm);

const Login = (props) => {
   const onSubmit = (formData) => {
      console.log(formData);
   }
   return <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
   </div>
}

export default Login;