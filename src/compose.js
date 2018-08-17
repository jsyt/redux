/**
 * 从右向左compose单参数函数，最后一个函数可以传递多个参数
 * 在传入的函数集合中从右向左依次将函数执行的结果作为参数传给下一个函数执行
 * @export
 * @param {...Function} funcs 用来compose的Function集合
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => {
    (...arg) => a(b(...arg))
  })
}