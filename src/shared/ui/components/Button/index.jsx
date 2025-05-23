import clsx from 'clsx'
import style from './Button.module.css'

export const Button = (props) => {
  return (
    <button
      className={clsx(style.button, props.className, style[props.variant])}
      {...props}
    ></button>
  )
}
