import { act } from 'react-test-renderer'
import {applyMiddleware,createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducer'

/**
 * 自定义log中间件
 * @param store
 * @returns {function(*): Function}
 */
const logger = store => next => action => {
    if (typeof action === 'function') {
        console.log('dispatch a function');
    } else {
        console.log('dispatching', action);
    }
    const result = next(action);
    console.log('nextState', store.getState());
    return result;
}


// 中间件
const middlewares = [thunk];

// 创建store
export default createStore(reducers,applyMiddleware(...middlewares));