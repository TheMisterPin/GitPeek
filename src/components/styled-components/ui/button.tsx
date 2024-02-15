/* eslint-disable react/require-default-props */
import styled from 'styled-components'
import tw from 'twin.macro'

interface ButtonProps {
  link?: string;
  text?: string;
  icon?: string;
  type?: 'submit' | 'button' | 'reset' | undefined;
  onClick?: () => void;
  onSubmit?: () => void;
}

const TwButton = styled.button`
  border: none;
  height: 46px;
`

const TwA = styled.a``
const Icon = tw.img`
object-contain
h-10`

function Button({
  link, text, type, onClick, onSubmit, icon,
}: ButtonProps) {
  return (
    <TwButton type={type} onClick={onClick} onSubmit={onSubmit}>
      {icon && <Icon src={icon} alt="" />}
      {link ? <TwA href={link}>{text}</TwA> : text}
    </TwButton>
  )
}

export default Button
