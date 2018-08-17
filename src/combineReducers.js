/**
 * 产生一个整体的 Reducer 函数。该函数根据 State 的 key 去执行相应的子 Reducer，并将返回结果合并成一个大的 State 对象。
 *
 * @export
 * @param {*} reducers 
 * @returns 返回一个函数，这个函数就是就是组合所有子reducer函数的最终reducer函数
 */
export default function combineReducers(reducers) {
  return (state = {}, action) => {
    const finalReducers = [];
    Object.keys(reducers).forEach(key => {
      finalReducers[key] = reducers[key](state[key], action)
    })
    return finalReducers;
  }
}