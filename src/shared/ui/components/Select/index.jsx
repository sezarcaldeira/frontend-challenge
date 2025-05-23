import clsx from 'clsx'
import inputStyle from '../TextField/TextField.module.css'
import { Option } from './Option'

export const Select = ({ className, ...props }) => {
  return <select className={clsx(className, inputStyle.input)} {...props} />
}

Select.Option = Option
