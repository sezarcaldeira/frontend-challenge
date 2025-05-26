import clsx from 'clsx'
import style from './Spinner.module.css'
import hiddenUserMessageStyle from '../HiddenUserMessage/HiddenUserMessage.module.css'

export const Spinner = (props) => {
  return (
    <span
      role="alert"
      aria-live="polite"
      className={clsx(style.spinner, props.className)}
      {...props}
    >
      <span className={hiddenUserMessageStyle.hiddenMessage}>
        loading spinner
      </span>
    </span>
  )
}
