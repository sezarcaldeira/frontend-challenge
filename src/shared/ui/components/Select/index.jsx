import clsx from 'clsx'
import inputStyle from '../TextField/TextField.module.css'
import style from './Select.module.css'
import { Option } from './Option'

export const Select = ({ className, placeholder, children, ...props }) => {
  return (
    <select
      aria-label={placeholder}
      className={clsx(className, inputStyle.input, style.select)}
      required
      {...props}
    >
      <Option value="" disabled>
        {placeholder}
      </Option>
      {children}
    </select>
  )
}

Select.Option = Option
