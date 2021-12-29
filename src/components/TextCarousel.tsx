import { useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'

const text = ['React', 'Nextjs', 'Javascript', 'Typescrypt', 'HTML5', 'CSS']

const TextCarousel = () => {
  const [isMoving, setIsMoving] = useState(false)
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setIsMoving(true)
    }, 3000)
  }, [])
  return (
    <>
      <Transition
        show={!isMoving}
        leave="transform transition duration-[1000ms]"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="translate-x-[80px] opacity-0"
        enter="transform transition duration-[1000ms]"
        enterFrom="translate-x-[-80px] opacity-0"
        enterTo="translate-x-0 opacity-100"
        afterLeave={() => {
          setIsMoving(false)
          setCounter((counter + 1) % text.length)
        }}
      >
        <p className="text-secondary text-4xl font-title">{text[counter]}</p>
      </Transition>
    </>
  )
}

export default TextCarousel
