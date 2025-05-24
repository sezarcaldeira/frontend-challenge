import clsx from 'clsx'
import style from './Button.module.css'
import { Spinner } from '..'

export const Button = ({
  className,
  variant,
  disabled,
  loading,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(style.button, className, style[variant])}
      {...props}
      disabled={disabled || loading}
    >
      {loading ? (
        <>
          <Spinner
            style={{
              '--spinner-size': '1rem',
            }}
          />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  )
}
