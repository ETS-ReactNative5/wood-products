export const initialState = {
    details: [],
    basket: [],
    items: 0
}



function reducer(state, action) {
    
    switch(action.type){
        case 'SEND_PRODUCT':
            return {
                ...state,
                details: [action.item]
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case 'REMOVE_FROM_BUSKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product ${action.id}`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'CLEAR_BASKET':
            return {
                ...state,
                basket: []
            }
        default:
            return state;
    }
        
}

export default reducer;