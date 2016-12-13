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