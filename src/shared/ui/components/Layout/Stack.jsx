import clsx from 'clsx'
import style from './Layout.module.css'

export const Stack = ({ className, ...props }) => {
  return <div className={clsx(className, style.stack)} {...props}></div>
}
