import React from 'react'

class Modal extends React.Component {
    render() {
        return (
            <div className="modal">
                <button className="modal-close">
                    <i className="material-icons modal-close-icon">close</i>
                </button>
                <section className="modal-title-section">
                    <span className="modal-title">Podcatch</span>
                </section>
                <section className="modal-input-section">
                    <form method="post" action="/login" id="form" name="loginForm">
                    <div className="modal-input-wrap">
                        <input className="modal-item modal-input username" for="loginForm" id="userVal" name="username" placeholder="Username"></input>
                        <i className="modal-icon material-icons">person</i>
                        <div className="modal-input-tab"></div>
                        <div className="modal-input-border"></div>
                    </div>
                    <div className="modal-input-wrap">
                        <input className="modal-item modal-input username" for="loginForm" id="passVal" name="password" placeholder="Password" type="password"></input>
                        <i className="modal-icon material-icons">lock</i>
                        <div className="modal-input-tab"></div>
                        <div className="modal-input-border"></div>
                        <button className="modal-item modal-button submit" id="btnSubmit" type="submit">Login</button>
                    </div>
                    </form>
                </section>
                <section className="modal-button-section"></section>
            </div>
        )
    }
}

export default Modal
/*
mixin modal
    .modal
        button.modal-close(v-on:click='showModal = false')
            i.material-icons.modal-close-icon close
        section.modal-title-section
            span.modal-title Podcatch
        section.modal-input-section
          form(method='post' action='/login' id='form' name='loginForm')
            .modal-input-wrap
                input.modal-item.modal-input.username(for ='loginForm' id='userVal' name='username' placeholder='Username')
                i.modal-icon.material-icons person
                .modal-input-tab
                .modal-input-border
            .modal-input-wrap
                input.modal-item.modal-input.password(for='loginForm' id='passVal' name='password' placeholder='Password' type='password')
                i.modal-icon.material-icons lock
                .modal-input-tab
                .modal-input-border
                button.modal-item.modal-button.submit(id='btnSubmit' type='submit') Login
        section.modal-button-section
*/