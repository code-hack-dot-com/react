export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type: 'SIGNOUT_SUCCESS'});
        })
    }
}
export const signUp = (newUser)=>{
    return (dispatch, getState,{getFirebase, getFirestore})=>{
        const firebase = getFirebase();
        const firestore = getFirestore();
        //first we create a user using firebase then we create a document for the user in firestore
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response)=>{
            //normally we use .add but if we use this, firestore will auto create a new id for the user
            //but we dont want that cos we wanna refer to the same id as in the firebase for a particular user so lets use.doc instead
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstname,
                lastName: newUser.lastname,
                initials: newUser.firstname[0] + newUser.lastname[0]
            })// this returns a promise so we can use a then method again

        }).then(()=>{
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch(err=>{
            dispatch({type: 'SIGNUP_ERROR', err})
        })
    }
}