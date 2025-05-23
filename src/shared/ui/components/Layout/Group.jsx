import clsx from 'clsx'
import style from './Layout.module.css'

export const Group = ({ className, ...props }) => {
  return <div className={clsx(className, style.group)} {...props}></div>
}
