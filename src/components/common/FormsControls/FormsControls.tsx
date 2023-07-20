import { Field, WrappedFieldProps } from "redux-form"
import {WrappedFieldMetaProps} from 'redux-form/lib/Field'
import React from "react"
import s from "./FormsControls.module.scss"
import { FieldValidatorsType } from "../../../utils/validators/validators"

type FormControlPropsType = {
   meta: WrappedFieldMetaProps
   children: any
}
const FormControl: React.FC<FormControlPropsType> = ({ meta: { touched, error }, children }) => {
   const hasError = touched && error;
   return (
      <div className={s.formControl + " " + (hasError ? s.error : "")}>
         <div>
            {children}
         </div>
         <div>
            {hasError && <span>{error}</span>}
         </div>
      </div>
   )
}
export const Textarea: React.FC<WrappedFieldProps> = (props) => {
   //const {input, meta, child, ...restProps} = props;
   const { input, meta, ...restProps } = props;
   return <FormControl {...props} > <textarea {...input} {...restProps} /> </FormControl>
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
   //const {input, meta, child, ...restProps} = props;
   const { input, meta, ...restProps } = props;
   return <FormControl {...props} > <input {...input} {...restProps} /> </FormControl>
}

export function createField<FormKeysType extends string>(
   placeholder: string | undefined, name: FormKeysType, 
   validators: Array<FieldValidatorsType>, component: React.FC<WrappedFieldProps>, props = {}, text = ""){
      return <div><Field placeholder={placeholder} name={name} validate={validators} component={component} {...props} />{text}</div>}