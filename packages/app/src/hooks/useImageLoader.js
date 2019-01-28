import { useState, useEffect } from 'react'

const imagesLoaded = []

function useImageLoader ({ original, optimized }) {
  const [loaded, setLoaded] = useState(imagesLoaded.includes(origin))

  useEffect(() => {
    if (!loaded) {
      const img = new Image()
      img.src = original

      img.onload = () => {
        imagesLoaded.push(original)
        setLoaded(true)
      }
    }
  }, [])

  return loaded ? original : optimized
}

export default useImageLoader
