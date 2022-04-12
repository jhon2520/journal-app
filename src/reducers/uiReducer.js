import TYPES from "../types/types";

const initalState = {
    loading:false,
    msgError:""
}

const uiReducer = (state = initalState,action)=>{

    switch (action.type) {
        case TYPES.UISETERROR:
            return{
                ...state,
                msgError:action.payload
            }
        case TYPES.UIREMOVEERROR:
            return{
                ...state,
                msgError:null
            }
        case TYPES.UISTARTLOADING:
            return{
                ...state,
                loading:true
            }
            case TYPES.UIFINISHLOADING:
                return{
                ...state,
                loading:false
            }
        
            
        
        default:
            return state;
    }

}

export default uiReducer