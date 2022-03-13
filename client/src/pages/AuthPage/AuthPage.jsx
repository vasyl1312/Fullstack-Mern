import React, {useState} from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"

import './AuthPage.scss'

const AuthPage = () => {
    //47-00
    return (
     <BrowserRouter>
        <Switch>
            <React.Fragment>
            <div className="container">
                <div className="auth-page">
                  <Route path="/login">
                    <h3>Авторизація</h3>
                        <form className="form form-login">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input 
                                        type="email"
                                        name="email" 
                                        className="validate"
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field col s12">
                                    <input 
                                        type="password"
                                        name="password" 
                                        className="validate"
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <button
                                className="wawes-effect wawes-light btn green"
                                >
                                    Увійти
                                </button>
                                <Link to="/registration" className="btn-outline btn-reg">Немає акаунту?</Link>
                            </div>
                        </form>
                    </Route>

                    <Route path="/registration">
                        <h3>Реєстрація</h3>
                        <form className="form form-login">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input 
                                        type="email"
                                        name="email" 
                                        className="validate"
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field col s12">
                                    <input 
                                        type="password"
                                        name="password" 
                                        className="validate"
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <button
                                className="wawes-effect wawes-light btn green"
                                >
                                    Реєстрація
                                </button>
                                <Link to="/login" className="btn-outline btn-reg">Вже існує акаунт?</Link>
                            </div>
                        </form>
                    </Route>
                </div>
              </div>
             </React.Fragment>
        </Switch>
     </BrowserRouter>
       
    )
}

export default AuthPage