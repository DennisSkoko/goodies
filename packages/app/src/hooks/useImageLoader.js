import { useState, useEffect } from 'react'

function useImageLoader ({ original, optimized }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = original

    img.onload = () => { setLoaded(true) }
  }, [])

  return loaded ? original : optimized
}

export default useImageLoader
