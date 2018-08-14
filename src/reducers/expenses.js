const expensesReducerDefaultState = [];

export default ( state = expensesReducerDefaultState, action ) => {
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

