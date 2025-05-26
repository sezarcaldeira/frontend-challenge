import style from './HiddenUserMessage.module.css'

/**
 * This component is used to display messages to the user that are not visible on the screen.
 * It is useful for screen readers to announce important information without cluttering the UI.
 */
export const HiddenUserMessage = ({ children, ...props }) => {
  return (
    <div className={style.hiddenMessage} aria-live="polite" {...props}>
      {children}
    </div>
  )
}
