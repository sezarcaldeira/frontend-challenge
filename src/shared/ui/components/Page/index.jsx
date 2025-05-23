import clsx from 'clsx'
import style from './Page.module.css'

export const Page = (props) => {
  return <div className={clsx(style.page, props.className)} {...props}></div>
}
