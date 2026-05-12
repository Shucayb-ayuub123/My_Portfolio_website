import { useEffect, useRef } from 'react'

export default function useScrollReveal() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.animate-on-scroll').forEach((child) => {
            child.classList.add('visible')
          })
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return sectionRef
}
