import TYPES from "../types/types"

export const setError = (err) =>{
    return{
        type:TYPES.UISETERROR,
        payload: err
    }
}

export const removeError = () =>{
    return{
        type:TYPES.UIREMOVEERROR,
    }
}

export const startLoading = ()=>{
    return{
        type:TYPES.UISTARTLOADING,
    }
}

export const finishLoading = ()=>{
    return{
        type:TYPES.UIFINISHLOADING,
    }
}