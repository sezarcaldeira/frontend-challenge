import style from './Checkbox.module.css'

export const Checkbox = (props) => {
  return (
    <label className={style.checkbox}>
      <input type="checkbox" {...props} />
      <span></span>
    </label>
  )
}
