import clsx from 'clsx'
import style from './Field.module.css'

export const Hint = ({ children, ...props }) => {
  return (
    <div className={clsx(style.hint, props.className)} {...props}>
      {children || <>&nbsp;</>}
    </div>
  )
}
