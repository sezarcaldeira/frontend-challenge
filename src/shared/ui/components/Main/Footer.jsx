import clsx from 'clsx'
import style from './Main.module.css'

export const Footer = (props) => {
  return <div className={clsx(style.footer, props.className)} {...props}></div>
}
