import style from './Checkbox.module.css'

export const Checkbox = ({ children, ...props }) => {
  return (
    <label className={style.checkbox}>
      <input type="checkbox" {...props} />
      <span className={style.icon}></span>
      {children}
    </label>
  )
}
