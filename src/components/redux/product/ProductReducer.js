const initialState = {
    productList:[]
}

const ProductReducer = (state = initialState,action)=>{
switch(action.type){
    case "FETCH_PRODUCTS":{
        return {
            ...state,
            productList:action.payload
        }
    }
    default : return state
}
}
export default ProductReducer