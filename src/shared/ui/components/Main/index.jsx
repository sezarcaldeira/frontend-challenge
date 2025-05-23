import clsx from 'clsx'
import style from './Main.module.css'
import { Content } from './Content'
import { Header } from './Header'
import { Footer } from './Footer'

export const Main = (props) => {
  return <main className={clsx(style.main, props.className)} {...props}></main>
}

Main.Content = Content
Main.Footer = Footer
Main.Header = Header
