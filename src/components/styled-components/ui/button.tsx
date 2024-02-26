/* eslint-disable react/require-default-props */
import styled from 'styled-components'
import tw from 'twin.macro'
import { Icon } from '.'

const TwButton = tw.button`
flex
`

const TwA = styled.a``

function Button({
  link, text, type, onClick, onSubmit, icon,
}: ButtonProps) {
  // Determine the rendering mode
  const renderingMode = () => {
    if (icon && link) return 'iconAndLink'
    if (icon && !link) return 'icon'
    if (!icon && link) return 'link'

    return 'text'
  }

  // Render content based on mode
  const renderContent = () => {
    switch (renderingMode()) {
      case 'icon':
        return <Icon src={icon} alt={text || ''} />

      case 'link':
        return <TwA href={link}>{text}</TwA>

      case 'iconAndLink':
        return (
          <>
            <Icon src={icon} alt={text || ''} />
            <TwA href={link}>{text}</TwA>
          </>
        )

      default: // 'text'
        return text
    }
  }

  return (
    <TwButton type={type} onClick={onClick} onSubmit={onSubmit}>
      {renderContent()}
    </TwButton>
  )
}

export default Button
