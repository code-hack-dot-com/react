const initState={
    projects : [
        {id: '1', title:'title 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem commodi eaque explicabo harum maxime natus, necessitatibus neque nesciunt officia omnis, quos, tempora veniam. Amet esse laborum nam odio quod.'},
        {id: '2', title:'title 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores doloribus enim eum, ex excepturi fuga fugit hic impedit, iusto labore molestias mollitia nemo neque nulla obcaecati soluta totam voluptates?'},
        {id: '3', title:'title 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque doloribus eius harum incidunt omnis, possimus repudiandae soluta temporibus ut voluptate? Ex exercitationem iste laboriosam quasi rem! Doloremque natus repellendus ullam!'},

    ]
}
const projectReducer = (state=initState, action)=>{
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;

        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;

        default:
            return state;
    }
}
export default projectReducer