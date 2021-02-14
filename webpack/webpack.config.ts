import dev from './webpack.config.dev'
import prod from './webpack.config.prod'

export default (env: { COMPILE: string }): any => {
  if (env.COMPILE === 'dev') {
    return dev
  } else {
    return prod
  }
}
