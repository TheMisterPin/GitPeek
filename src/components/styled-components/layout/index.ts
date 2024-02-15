import styled from 'styled-components'
import tw from 'twin.macro'

const TwBox = tw.div`
xl:h-3/5
xl:w-3/5
p-3
py-9
gap-5
flex
flex-col
justify-around
items-center
`

export const Shadow = styled(TwBox)`
  transform: perspective(75em) rotateX(18deg);
  position: relative;
  box-shadow:
    rgba(22, 31, 39, 0.42) 0px 60px 123px -25px,
    rgba(19, 26, 32, 0.28) 0px 35px 75px -35px;
  border-radius: 10px;
  border: 1px solid;
  background-color: #f4ddb4;
  border-color: rgb(213, 220, 226) rgb(213, 220, 226) rgb(184, 194, 204);
`
export const PageContainer = tw.section`
flex 
w-full
h-[100vh]
flex-col
justify-center
items-center
bg-[#ad9b7d]
`
