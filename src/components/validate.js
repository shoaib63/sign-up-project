export const validate = data =>{
    const errors = {};

    if(!data.name.trim()) {
        errors.name = "Username required";
    } else{
        delete errors.name;
    }

    if(!data.email){
        errors.email = "Email required"
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)){
        errors.email = "Email address is invalid"
    } else{
        delete errors.email;
    }

    if(!data.password){
        errors.password = "Password is requierd"
    } else if (data.password.length < 6){
        errors.password = "Password need to be 6 character or more"
    } else {
        delete errors.password
    }

    if(!data.confirmPassword) {
        errors.confirmPassword = "Confirm the Password"
    } else if(data.confirmPassword !== data.password){
        errors.confirmPassword = "Password do not match"
    } else {
        delete errors.confirmPassword
    }

    if (data.isAccepted){
        delete data.isAccepted;
    } else {
        errors.isAccepted = "Accept our regulations"
    }

    return errors;
}