import clsx from 'clsx'
import style from './Main.module.css'

export const Header = (props) => {
  return <div className={clsx(style.header, props.className)} {...props}></div>
}
