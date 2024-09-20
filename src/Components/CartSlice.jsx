//Implement Redux Logic
import { createSlice} from '@reduxjs/toolkit';

const inititalState = {
    cartItems: [],
}

const CartSlice = createSlice({
    // Actions and reducers creation. String value with name of slice
    //initialState is object representing initial state of slice
    //reducers object containing reducer functions. Each key value pair represents single redcuer
    name: 'cart',
    initialState,
    reducers: {
        //parameters are state: current state of slice 
        //and action: dispacted action containing payload
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            //if item exists
            if (existingItem) {
                existingItem.quantity += 1;
            }
            else {
                state.cartItems.push({...action.payload, quantity: 1});
            }

        },
        //update cartItems array by filtering out item with the ID provided in the action payload
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        //clear cart to empty array
        clearCart(state) {
            state.cartItems = [];
        },
        //increase quantity of item in shopping cart
        increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }
        },
        //if item found and quantity > 1, decrease the item increaseItemQuantity
        decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemsToDecrease.quantity -= 1;
            }
        },
    }
});
//Export action creators and reducer
export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    } = CartSlice.actions;
    export default CarSlice.reducer;