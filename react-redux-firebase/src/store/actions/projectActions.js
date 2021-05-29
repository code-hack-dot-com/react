export const createProject = (project) => {
    //thunk allows us return a function(we can interact with our db in this function) so lets do that
    return (dispatch, getState)=>{
        //here we make async call and then dispatch the action AGAIN since we paused it to get some data!
        dispatch({type:'CREATE_PROJECT',project:project});

    }
}

