import { createStore } from 'redux';

// Action generators - functions that return action objects, only describe what happened

// const incrementCount = (payload = {}) => {
//     return {
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//     }
// }

//destructuring arguments passed to function, returning implicitly (shorthand syntax)
const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count} = {}) => ({
    type: 'SET',
    count
})

// Reducers
const countReducer = (state = { count : 0 }, action) => {
    switch ( action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}

// reducer: describe how the application's state changes in response to actions sent to the store
const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());

store.dispatch(incrementCount( { incrementBy : 5 } ))

store.dispatch(decrementCount());

store.dispatch(decrementCount(  { decrementBy: 10}));

store.dispatch(resetCount());

store.dispatch(setCount( { count: 101} ))
