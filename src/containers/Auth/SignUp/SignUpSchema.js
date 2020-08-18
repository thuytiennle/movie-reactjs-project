import React from 'react';
import * as yup from 'yup';
import { TextTranslation } from '../../Language/TextTranslation';

export const SignupSchema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required(<TextTranslation id="container.Auth.SignUp.AccountValidate" />),
  hoTen: yup
    .string()
    .required(<TextTranslation id="container.Auth.SignUp.NameValidate" />),
  email: yup
    .string()
    .email()
    .required(<TextTranslation id="container.Auth.SignUp.EmailValidate" />),
  matKhau: yup
    .string()
    .min(6, <TextTranslation id="container.Auth.SignUp.PassValidateShort" />)
    .max(20, <TextTranslation id="container.Auth.SignUp.PassValidateLong" />)
    .required(<TextTranslation id="container.Auth.SignUp.PasswordValidate" />),
  soDt: yup
    .string()
    .required(<TextTranslation id="container.Auth.SignUp.PhoneValidate" />)
    .matches(/^[0-9]+$/, () => (
      <TextTranslation id="container.Auth.SignUp.PhoneNotNumber" />
    )),
  maNhom: yup.string(),
});
