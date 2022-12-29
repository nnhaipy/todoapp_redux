// import { createStore } from 'redux';
import { createStore } from 'redux';
import { rootReducer } from './Reducer/rootReducer';
import { todosReducer } from './todoReducer';

const store = createStore(rootReducer);
// console.log('Initial state: ', store.getState());

export default store
