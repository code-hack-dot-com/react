const initState={
    authError: null
}
const authReducer = (state=initState, action)=>{
    switch (action.type){
        case 'LOGIN_ERROR':
            console.log('login error')
            return{
                ...state,
                 authError:'Login failed,' + action.err.message
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return{
                ...state,
                authError: null

            }
        case 'SIGNOUT_SUCCESS':
            console.log('SIGNOUT_SUCCESS');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('error signing up',action.err.message);
            return {
                ...state,
                authError:'signup failed,' + action.err.message
            }
        default:
            return state;

    }
}
export default authReducer

