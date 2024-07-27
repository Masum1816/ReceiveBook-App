
const initialState = {

    Books : [],
    Book: null

}

const ReceipeReducer = (state = initialState, action) => {

    switch(action.type) {

        case "GET_BOOKS":
            return{
                ...state,
                Books : action.payload,
                Book : null
            }

        case "UPDATE_BOOKS":
            return{
                ...state,
                Book: action.payload
            }

        case "DELETE_BOOKS":
            return{
                ...state,
                Books: action.payload,
                Book: null
            }

        default:
            return state;

    }
    
}

export default ReceipeReducer;








