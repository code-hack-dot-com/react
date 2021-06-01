import {createFirestoreInstance} from "redux-firestore";

export const createProject = (project) => {
    //thunk allows us return a function(we can interact with our db in this function) so lets do that
    //using withExtraArguments allows us to pass in getfirestore and getfirebase, so lets destructure them below as we get them
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        //here we make async call and then dispatch the action AGAIN since we paused it to get some data!
        const firestore = getFirestore();
        //the below takes some time to complete so it returns a promise. so lets attach the 'then' method so the dispatch in the ten method happens once the db update is done
        firestore.collection('projects').add({
            ...project, //spread operator for title and content
            authorFirstName: 'Aisha',
            authorLastName:'Lawal',
            authorId: 12345,
            createdAt: new Date(),
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',project:project});
        }).catch((err)=>{
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })

    }
}

