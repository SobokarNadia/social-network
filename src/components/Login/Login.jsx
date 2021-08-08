import React from 'react';
import {Form, Field} from'react-final-form';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {getCaptchaUrl, getIsAuth, getErrorMeassages} from "../../redux/auth-selectors";
import logo from '../../assets/images/logo_BIG.svg';
import cl from './Login.module.scss';
import { Redirect } from 'react-router';

const Login = (props) => {

    if (props.isAuth){
        return <Redirect to='/profile' />;
    }
    return <div className={cl.loginPage}>
        <img src={logo} className={cl.logo}/>
        <div className={cl.subhead}>We are glad to see you!</div>
        <LoginForm {...props} />
        </div>
}
const LoginForm = (props) => {
    const onSubmit = (data) => {
        let {email, password, rememberMe, captcha} = data;
        props.login(email, password, rememberMe, captcha);
        
    }
    return (
        <Form onSubmit={onSubmit}
              initialValues={{rememberMe: false}}
              validate={values => {
                  const errors = {};
                  if (!values.email){
                      errors.email = 'Required';
                  }
                  if (!values.password){
                      errors.password = 'Required';
                  }else if (values.password.length < 4 || values.password.length > 9){
                      errors.password = 'Password should contain from 4 to 9 symbols';
                  }
                  return errors;
              }}
              render={({handleSubmit, pristine, submitting}) => (<form onSubmit={handleSubmit} className={cl.loginForm}>
                      <Field name={'email'}>
                      {({input, meta}) => (<>
                          <input {...input} placeholder={'Email'} className={cl.input}/>
                          {meta.error && meta.touched && <span className={cl.error}>{meta.error}</span>}
                      </>)
                      }
                      </Field>
                      <Field  name={'password'} render={({input, meta}) => (
                          <>
                          <input {...input} placeholder={'Password'} type={'password'} className={cl.input}/>
                            {meta.error && meta.touched && <span className={cl.error}>{meta.error}</span>}
                          </>
                      )}/>
                  <div className={cl.checkbox}>
                      <Field name={'rememberMe'} type={'checkbox'} component={'input'} className={cl.checkbox_element} />
                      <label
                      className={cl.checkbox_label}>Remember me</label>
                  </div>
                  {(props.captchaUrl) ?
                      <div className={cl.test}>
                      <img className={cl.captcha} src={props.captchaUrl} />
                      <Field name='captcha' render={({input, meta}) => {
                          return <>
                          <input className={cl.input} {...input} />
                              {meta.touched && meta.error && <div className={cl.error} >{meta.error}</div>}
                          </>
                      }}/>
                      </div>
                      : null}
                  {(props.errorMeassages) ? <div className={cl.error} >{props.errorMeassages.map(message => <span>{message}</span>)}</div> : null}
                  <div>
                      <button type={'submit'} className={cl.button} disabled={submitting || pristine}>LOG IN</button>
                  </div>
              </form>)}
        />
    )
}

let mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    captchaUrl: getCaptchaUrl(state),
    errorMeassages: getErrorMeassages(state)
})



export default connect(mapStateToProps, {login})(Login);