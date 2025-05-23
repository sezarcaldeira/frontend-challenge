import clsx from 'clsx'
import style from './TextField.module.css'

export const TextField = ({ className, error, ...props }) => {
  return (
    <input
      className={clsx(className, style.input, {
        [style.error]: error,
      })}
      {...props}
    />
  )
}
