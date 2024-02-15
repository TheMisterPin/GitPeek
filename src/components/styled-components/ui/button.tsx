/* eslint-disable react/require-default-props */
import styled from 'styled-components'
import tw from 'twin.macro'
import { fadeIn, fadeOut } from '../layout/animations'

interface ButtonProps {
  link?: string;
  text?: string;
  icon?: string;
  type?: 'submit' | 'button' | 'reset' | undefined;
  onClick?: () => void;
  onSubmit?: () => void;
  animation?: 'fadein' | 'fadeout';
}

const TwButton = styled.button<{ animation?: 'fadein' | 'fadeout' }>`
  border: none;

  ${({ animation }) => animation === 'fadein' && fadeIn}
  ${({ animation }) => animation === 'fadeout' && fadeOut}
`

const TwA = styled.a``
const Icon = tw.img`
object-contain
h-10`

export function Button({
  link, text, type, onClick, onSubmit, icon, animation,
}: ButtonProps) {
  return (
    <TwButton type={type} onClick={onClick} onSubmit={onSubmit} animation={animation}>
      {icon && <Icon src={icon} alt="" />}
      {link ? <TwA href={link}>{text}</TwA> : text}
    </TwButton>
  )
}
