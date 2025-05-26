import clsx from 'clsx'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

import style from './Banner.module.css'

const ICON_MAP = {
  success: FaCheckCircle,
  error: FaTimesCircle,
}

export const Banner = ({ message, variant, className }) => {
  const Icon = ICON_MAP[variant] ?? FaCheckCircle

  return (
    <div role="alert" className={clsx(style.banner, className, style[variant])}>
      <div>
        <Icon size={26} />
      </div>
      <span>{message}</span>
    </div>
  )
}
