export default (...keys) => (a ,b) => {
  const aComp = keys.reduce((acc, cur) => acc[cur], a)
  const bComp = keys.reduce((acc, cur) => acc[cur], b)
  return bComp - aComp
}