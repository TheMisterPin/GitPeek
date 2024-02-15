/* eslint-disable react/require-default-props */
import { css } from 'styled-components'

export const fadeIn = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 0.5s ease-out forwards;
`

export const fadeOut = css`
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  animation: fadeOut 0.5s ease-out forwards;
`
interface AnimationProps {
  isShowing?: boolean
  duration?: number
  children?: React.ReactNode
}
export function FadeIn({ children, isShowing, duration = 500 } : AnimationProps) {
  return (
    <div
      className={`transition-opacity duration-${duration} ease-in-out ${isShowing ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: isShowing ? '550ms' : '0ms' }}
    >
      {children}
    </div>
  )
}

// FadeOut Animation Component
export function FadeOut({ children, isShowing, duration = 500 }: AnimationProps) {
  return (
    <div
      className={`transition-opacity duration-${duration} ease-in-out ${isShowing ? 'opacity-0' : 'opacity-100'}`}
      style={{ transitionDelay: isShowing ? '0ms' : '550ms' }}
    >
      {children}
    </div>
  )
}
