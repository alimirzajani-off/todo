import React from 'react';
import Loading from '../UI/Loader/loader'
import GoogleAuth from '../../container/Auth/GoogleAuth';
import dataService from '../../data-service';
import './login.css'

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        loading: false
    }

    setEmail(e) {
        this.setState({ email: e.target.value })
    }

    setPassword(e) {
        this.setState({ password: e.target.value })
    }

    checkLogin() {
        const data = {
            email: this.state.email,
            password: this.state.password
        }

        this.setState({ loading: true })

        dataService.login(data).then(res => {
            if (res.status == 200) {
                localStorage.setItem("token", res.data.token)
                this.props.history.push('/main')
                this.setState({ loading: false })
            }
        }).catch(e => console.log(e))
    }

    onSubmitHandler(e) {
        e.preventDefault()
    }

    render() {
        return (
            <section className="login-section">
                <div className="col-md-12 col-sm-12 d-block d-sm-none d-none d-sm-block d-md-none d-none d-md-block d-lg-none back-login2"></div>
                {!this.state.loading ? <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 login-part">
                    <form className="form-login" onSubmit={e => this.onSubmitHandler(e)}>
                        <div className="login-input">
                            <div className="text-login text-center">
                                <img src="img/Logo.png" alt="" style={{ width: '150px' }} />
                                <h6><b></b></h6>
                                <p></p>
                            </div>
                            <div className="input-group">
                                <div className="email d-flex">
                                    <input type="email" className="email-input" placeholder="ایمیل" onChange={e => this.setEmail(e)} />
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="pass d-flex">
                                    <input type="password" className="pass-input" placeholder="رمز عبور" onChange={e => this.setPassword(e)} />
                                    <i className="fa fa-lock"></i>
                                </div>
                            </div>
                            <div className="btn-login pt-4 pb-1">
                                <button className="btn btn-primary" onClick={() => this.checkLogin()}>ورود</button>
                                <a href="#" className="fopa-login text-dark pr-5"><h6>فراموش کردن رمز عبور</h6></a>
                            </div>
                            {/* <GoogleAuth /> */}
                        </div>
                    </form>
                </div> : <Loading />}
                <div className="col-xl-4 col-lg-4 d-none d-lg-block d-xl-none d-none d-xl-block back-login1">
                </div>
            </section>
        )
    }
}

export default Login