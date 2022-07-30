import { useCallback } from 'react'
import _ from 'lodash'

/**
 * コールバック関数を一定秒数ごとに実行可能な関数にラップする
 */
export const useThrottle = (func: () => void, wait = 1000) => {
  const throttled = _.throttle(func, wait, { trailing: false })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(throttled, [])
}
