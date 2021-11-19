import dev from './webpack.config.dev'
import prod from './webpack.config.prod'

export default (env: { COMPILE: 'development' | 'production' }): any => {
  if (env.COMPILE === 'development') {
    return dev
  } else {
    return prod
  }
}
