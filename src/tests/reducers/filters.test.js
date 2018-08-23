// will be testing that action has a correct impact on the state by making the assertion of what comes back

import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filters values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'} );
    expect(state).toEqual({
        text : '', 
        sortBy : 'date', 
        startDate : moment().startOf('month'), 
        endDate : moment().endOf('month')
    });
})


test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' } );
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    const currentState = {
        text : '', 
        sortBy : 'amount', 
        startDate : undefined,
        endDate : undefined
    }
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' } );
    expect(state.sortBy).toBe('date');
})

test('should set text filter', () => {
    const text = 'my filter';
    const action = {
        type: 'SET_TEXT_FILTER', 
        text
    }
    const state = filtersReducer( undefined, action );
    expect(state.text).toBe(text);
})

test('should set start date filter', () => {
    const startDate = moment().startOf('month');
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer( undefined, action);
    expect(state.startDate).toBe(startDate);
});

test('should set end date filter', () => {
    const endDate = moment().endOf('month');
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducer( undefined, action);
    expect(state.endDate).toBe(endDate);  
})