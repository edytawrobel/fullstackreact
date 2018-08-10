import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Action Generators
// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE

const removeExpense = ( { id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// EDIT_EXPENSE
const editExpense = (id, updates = {}) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

//Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
    switch (action.type) {
        case 'ADD_EXPENSE' :
           return [
               ...state,   // spread operator, all expenses
               action.expense
           ];
        case 'REMOVE_EXPENSE' :
            // return state.filter((expense) => {
            //     expense !== action.id // expense was a match and needs to get filtered out
            // });

            return state.filter(( { id }) => id !== action.id);
        case 'EDIT_EXPENSE' :
           return state.map((expense) => {
              if (expense.id === action.id) {
                return {
                    ...expense,
                    ...action.updates
                }
              } else {
                  return expense
              }
           });
        default:
            return state;
    };
}; 

//Filters reducer

const filtersReducerDefaultState = { text : '', sortBy : 'date', startDate : undefined, endDate : undefined};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer  // routes
    })
);

//notify about state changes
store.subscribe(() => {
    console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense( { description: 'Rent', amount: 500 } ));
const expenseTwo = store.dispatch(addExpense( { description: 'Coffee', amount: 100} ));
store.dispatch(removeExpense( { id: expenseOne.expense.id } ));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 200 }));

const demoState = {
    expenses: [ {
        id: 'jnfjnf',
        description: 'january rent',
        note: 'this was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}