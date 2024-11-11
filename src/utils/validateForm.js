export function validateForm(name, value, errors, setErrors, refName, refEmail, refMessage ) {
    switch (name) {
        case 'name':
            if(!new RegExp(/^[a-zA-Z\u00C0-\u024F\u0027\u002E\u002D\u1E00-\u1EFF]+( [a-zA-Z\u00C0-\u024F\u0027\u002E\u002D\u1E00-\u1EFF\s]+)+$/).test(value)){
                if (value === '') {
                    setErrors({...errors, name:'Full name is required'});
                } else {
                    setErrors({...errors, name:'Enter a valid full name'});
                }
                refName.current.classList.remove("contact__form-input--valid");
                refName.current.classList.add("contact__form-input--error");
            } else {
                setErrors({});
                refName.current.classList.add("contact__form-input--valid");
                refName.current.classList.remove("contact__form-input--error");
            }
            break;
        case 'email':
            if(!new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/).test(value)){
                if (value === '') {
                    setErrors({...errors, email:'Email is required'});
                } else {
                    setErrors({...errors, email:'Enter a valid email'});
                }
                refEmail.current.classList.remove("contact__form-input--valid");
                refEmail.current.classList.add("contact__form-input--error");
            } else {
                setErrors({});
                refEmail.current.classList.add("contact__form-input--valid");
                refEmail.current.classList.remove("contact__form-input--error");
            }
            break;
        case 'message':
            if(!new RegExp(/[\S\s]+[\S]+/).test(value)){
                if (value === '') {
                    setErrors({...errors, message:'Message is required'});
                } else {
                    setErrors({...errors, message:'Message must be at least two characters'});
                }
                refMessage.current.classList.remove("contact__form-input--valid");
                refMessage.current.classList.add("contact__form-input--error");
            } else {
                setErrors({});
                refMessage.current.classList.add("contact__form-input--valid");
                refMessage.current.classList.remove("contact__form-input--error");
            }
            break;
        default:
            break;
    }
}