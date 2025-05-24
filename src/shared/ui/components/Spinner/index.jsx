import clsx from 'clsx'
import style from './Spinner.module.css'

export const Spinner = (props) => {
  return (
    <span className={clsx(style.spinner, props.className)} {...props}></span>
  )
}
