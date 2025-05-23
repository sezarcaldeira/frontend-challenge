import clsx from 'clsx'

export const Option = ({ className, ...props }) => {
  return <option className={clsx(className)} {...props} />
}
