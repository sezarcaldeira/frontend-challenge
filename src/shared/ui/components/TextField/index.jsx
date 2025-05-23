import clsx from 'clsx'
import style from './TextField.module.css'

export const TextField = ({ className, ...props }) => {
  return <input className={clsx(className, style.input)} {...props} />
}
