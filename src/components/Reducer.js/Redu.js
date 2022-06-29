import { inc } from "../Actions/Actiontype";
const reducer =(state,action)=>{
    switch (action.type) {
        case 'Increment': 
             return state + action.payload
            break;
        case 'Decrement':
            return state - action.payload
    
        default:
            return state;
    }
}