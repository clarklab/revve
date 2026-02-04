'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

interface TypewriterProps {
  words: string[]
  /** Time to display each word in ms (default: 2000) */
  displayDuration?: number
  /** Time to type each character in ms (default: 50) */
  typingSpeed?: number
  /** Time to delete each character in ms (default: 30) */
  deletingSpeed?: number
  /** Pause before deleting in ms (default: 1000) */
  pauseBeforeDelete?: number
  className?: string
}

export function Typewriter({
  words,
  displayDuration = 2000,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseBeforeDelete = 1000,
  className = '',
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    if (!isDeleting) {
      // Typing
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }, typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        // Finished typing, pause then start deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, pauseBeforeDelete)
        return () => clearTimeout(timeout)
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deletingSpeed)
        return () => clearTimeout(timeout)
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    }
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseBeforeDelete])

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[1px] h-[1em] bg-current ml-0.5 align-middle"
      />
    </span>
  )
}

// Simple variant that just cycles through words with fade animation (no typing effect)
interface TypewriterFadeProps {
  words: string[]
  /** Time to display each word in ms (default: 2000) */
  interval?: number
  className?: string
}

export function TypewriterFade({ words, interval = 2000, className = '' }: TypewriterFadeProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, interval)
    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        {words[currentIndex]}
      </motion.span>
    </AnimatePresence>
  )
}

// Types out text once when scrolled into view
interface TypewriterOnceProps {
  text: string
  /** Time to type each character in ms (default: 40) */
  typingSpeed?: number
  /** Show cursor while typing (default: true) */
  showCursor?: boolean
  className?: string
}

export function TypewriterOnce({
  text,
  typingSpeed = 40,
  showCursor = true,
  className = '',
}: TypewriterOnceProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [currentText, setCurrentText] = useState('')
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    if (!isInView) return

    if (currentText.length < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else {
      setIsDone(true)
    }
  }, [isInView, currentText, text, typingSpeed])

  return (
    <span ref={ref} className={className}>
      {currentText}
      {showCursor && !isDone && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.4, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block w-[2px] h-[1em] bg-current ml-0.5 align-middle"
        />
      )}
    </span>
  )
}
