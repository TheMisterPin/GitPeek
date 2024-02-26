import styled from 'styled-components'
import tw from 'twin.macro'

export const PageTitle = styled.h1`
  font-size: clamp(3.5rem, 8vw, 6rem);
  font-family: 'Bangers', sans-serif;
  color: #e17d0a;
    -webkit-text-stroke: 2px black;
    text-shadow: 0 0 10px black;
`

export const TextBig = styled.p`
  font-size: clamp(1rem, 2.5vw, 3rem);
  font-family: 'Akaya Kanadaka', serif;
  color: #381f03; 
  text-align: center;
  font-weight: bold;
`
export const TextWhite = styled.p`
  font-size: clamp(1.3rem, 2.5vw, 3rem);
  font-family: 'Akaya Kanadaka', serif;
  color: #ffffff; 
  text-align: center;
  font-weight: bold;
`
export const TextMed = styled.p`
  font-size: clamp(1rem, 1.5vw, 2rem);
  font-family: 'Akaya Kanadaka', serif;
  color: #381f03; 
  font-weight: bold;
`
export const Avatar = tw.img`
h-32
rounded-full
mt-2
object-cover
border-amber-900
border-8
w-32
`
export const Icon = tw.img`
object-contain
`
export const InfoElement = tw.div`
text-center
justify-around
flex`
