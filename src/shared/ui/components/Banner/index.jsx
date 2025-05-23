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
    <div className={clsx(style.banner, className, style[variant])}>
      <Icon size={32} />
      <span>{message}</span>
    </div>
  )
}
