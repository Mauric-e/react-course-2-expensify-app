import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test ('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

//should add an expense

test('should add an expense',() => {
    const expense = {
        id: '300',
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
      };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense])
})

//should edit an expense
test('should edit an expense', () => {
    const amount = 122000;
    const action = {
      type: 'EDIT_EXPENSE',
      id: expenses[1].id,
      updates: {
          amount
      }
    }
    const state = expensesReducer(expenses,action);
    expect(state[1].amount).toBe(amount)
});

//should not edit expense if not found
test('should not edit expense if not found', () => {
    const amount = 122000;
    const action = {
      type: 'EDIT_EXPENSE',
      id: '-1',
      updates: {
          amount
      }
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
});


test('should set expenses',() => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});