import React from "react";

const Modal = () => {
    return (
        <div id="modal" className="popupContainer" style={{ display: "none" }}>
            <div className="popupHeader">
                <span className="header_title">Login</span>
                <span className="modal_close">
                    <i className="fa fa-times" />
                </span>
            </div>
            <section className="popupBody">
                {/* Social Login */}
                <div className="social_login">
                    <div>
                        <a href="./" className="social_box fb">
                            <span className="icon">
                                <i className="fab fa-facebook" />
                            </span>
                            <span className="icon_title">
                                Connect with Facebook
                            </span>
                        </a>
                        <a href="./" className="social_box google">
                            <span className="icon">
                                <i className="fab fa-google-plus" />
                            </span>
                            <span className="icon_title">
                                Connect with Google
                            </span>
                        </a>
                    </div>
                    <div className="centeredText">
                        <span>Or use your Email address</span>
                    </div>
                    <div className="action_btns">
                        <div className="one_half">
                            <a href="./" id="login_form" className="btn">
                                Login
                            </a>
                        </div>
                        <div className="one_half last">
                            <a href="./" id="register_form" className="btn">
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
                {/* Username & Password Login form */}
                <div className="user_login">
                    <form>
                        <label>Email / Username</label>
                        <input type="text" />
                        <br />
                        <label>Password</label>
                        <input type="password" />
                        <br />
                        <div className="checkbox">
                            <input id="remember" type="checkbox" />
                            <label htmlFor="remember">
                                Remember me on this computer
                            </label>
                        </div>
                        <div className="action_btns">
                            <div className="one_half">
                                <a href="./" className="btn back_btn">
                                    <i className="fa fa-angle-double-left" />{" "}
                                    Back
                                </a>
                            </div>
                            <div className="one_half last">
                                <a href="./" className="btn btn_red">
                                    Login
                                </a>
                            </div>
                        </div>
                    </form>
                    <a href="./" className="forgot_password">
                        Forgot password?
                    </a>
                </div>
                {/* Register Form */}
                <div className="user_register">
                    <form>
                        <label>Full Name</label>
                        <input type="text" />
                        <br />
                        <label>Email Address</label>
                        <input type="email" />
                        <br />
                        <label>Password</label>
                        <input type="password" />
                        <br />
                        <div className="checkbox">
                            <input id="send_updates" type="checkbox" />
                            <label htmlFor="send_updates">
                                Send me occasional email updates
                            </label>
                        </div>
                        <div className="action_btns">
                            <div className="one_half">
                                <a href="./" className="btn back_btn">
                                    <i className="fa fa-angle-double-left" />{" "}
                                    Back
                                </a>
                            </div>
                            <div className="one_half last">
                                <a href="./" className="btn btn_red">
                                    Register
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Modal;
