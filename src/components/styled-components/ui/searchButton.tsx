import { useState } from 'react'
import { FadeIn } from '../layout/animations'
import { searchIcon } from '../../../utils/images'
import { Button } from './button'
import { SearchBar } from '../..'

function SearchButton() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {
        !isOpen
          ? <Button onClick={() => setIsOpen(!isOpen)} icon={searchIcon} />
          : <Button type="submit" icon={searchIcon} />
      }
      <FadeIn isShowing={isOpen}>
        <SearchBar />
      </FadeIn>
    </>
  )
}

export default SearchButton
