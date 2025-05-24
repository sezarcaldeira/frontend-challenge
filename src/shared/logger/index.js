const log = (level, prefix, ...args) => {
  const fn = console

  fn[level](`[${prefix}|${level}]`, ...args)
}

export const createLogger = (prefix) => {
  const logger = {
    info: (...args) => log('info', prefix, ...args),
    error: (...args) => log('error', prefix, ...args),
  }

  return Object.freeze(logger)
}
