import clsx from 'clsx'
import style from './Main.module.css'

export const Content = (props) => {
  return <div className={clsx(style.content, props.className)} {...props}></div>
}
