import s from './Container.module.css'
export const Container = ({ children }) => {
  return <div className={s.iner}>{children}</div>
}
export default Container