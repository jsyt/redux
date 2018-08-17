export default function combineReducers(reducers) {
  return (state = {}, action) => {
    const finalReducers = [];
    Object.keys(reducers).forEach(key => {
      finalReducers[key] = reducers[key](state[key], action)
    })

    return finalReducers;
  }


}