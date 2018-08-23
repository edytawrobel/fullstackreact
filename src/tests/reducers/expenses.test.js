import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer( undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2]]);
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[1], expenses[2]]);
})

test('should add expense', () => {
    const expense = {
        id: '10',
        description: 'Invest',
        note: 'first invest',
        amount: 500,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
})

test('should edit expense', () => {
    const description = 'Gummy bear';

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    }

    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(description);
})

test('should not edit expense if id not found', () => {
    const description = 'Gummy bear';

    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        }
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})