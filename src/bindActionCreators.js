/**
 * 将创造action的函数与dispatch函数结合，使得返回一个可以 dispatch action 的函数或者对象
 *
 * @export
 * @param {*} actionCreators 一个函数或者对象用来返回action
 * @param {*} dispatch store.dispatch
 * @returns 一个函数或者对象
 */
export default function bindActionCreators(actionCreators, dispatch) {

  function bindActionCreator(actionCreator, dispatch) {
    return function () {
      dispatch(actionCreator.call(this, arguments))
    }
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function')
  }
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch)
  } else {
    const boundActionCreator = {};
    Object.keys(actionCreators).forEach(key => {
      let actionCreator = actionCreators[key]
      if (typeof actionCreator === 'function') {
        boundActionCreator[key] = bindActionCreator(actionCreator, dispatch)
      }
    })
    return boundActionCreator;
  }
}