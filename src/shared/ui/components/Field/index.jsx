import clsx from 'clsx'
import style from './Field.module.css'
import { Hint } from './Hint'
import { Layout } from '..'

export const Field = ({ className, error, ...props }) => {
  return (
    <Layout.Stack
      className={clsx(style.field, className, {
        [style.error]: error,
      })}
      {...props}
    ></Layout.Stack>
  )
}

Field.Hint = Hint
