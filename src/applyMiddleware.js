import compose from './compose'

/**
 * 根据传入的中间件函数来改造 dispatch 返回一个包含新的dispatch的 store
 *
 * @export
 * @param {*} middlewares 中间件集合
 * @returns 返回一个包含新的dispatch的 store
 */
export default function applyMiddleware(...middlewares) {
  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      let store = createStore(reducer, preloadedState, enhancer)
      let getState = store.getState();
      let dispatch; //新的dispatch
      let middlewaresApi = {
        getState,
        dispatch: (...arg) => {
          dispatch(...arg)
        }
      }
      const chain = middlewares.map(middleware => middleware(middlewaresApi))
      dispatch = compose(chain)(store.dispatch)
      return {
        ...stort,
        dispatch
      }
    }
  }

}