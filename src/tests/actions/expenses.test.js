import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: "123abc"});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should set up edit expense action object', () =>{
    const action = editExpense( "123abc", { note: "New note value"} );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }
    })
})

test('should set up add expense action object with default values when nothings gets passed in', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note : '',
            amount: 0,
            createdAt : 0
        }
    })
})

test('should set up add expense action object with default values when nothings gets passed in', () => {
    const expenseData = {
        description: 'Rent',
        note : 'Last month rent',
        amount: 109500,
        createdAt : 1000
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})