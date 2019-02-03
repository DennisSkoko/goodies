import { useState, useEffect } from 'react'
import throttle from 'lodash.throttle'

const THROTTLE_TIME_MS = 50

function useInViewDetector (ref) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    const listener = throttle(() => {
      const rect = element.getBoundingClientRect()
      setInView(rect.top >= 0 && rect.bottom <= window.innerHeight)
    }, THROTTLE_TIME_MS)

    window.addEventListener('scroll', listener)
    window.addEventListener('resize', listener)

    return () => {
      window.removeEventListener('scroll', listener)
      window.removeEventListener('resize', listener)
    }
  }, [])

  return inView
}

export default useInViewDetector
