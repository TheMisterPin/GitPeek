import styled from 'styled-components'
import tw from 'twin.macro'

const TwBox = tw.section`
  xl:h-3/5
  xl:w-3/5
  p-3
  py-9
  gap-5
  flex
  flex-col
  justify-around
  items-center
  absolute
 
`

export const Shadow = styled(TwBox)`
  box-shadow:
    rgba(22, 31, 39, 0.42) 0px 60px 123px -25px,
    rgba(19, 26, 32, 0.28) 0px 35px 75px -35px;
  border-radius: 10px;
  border: 1px solid;
  background: rgb(57, 223, 204);
  background: radial-gradient(
    circle,
    rgba(254, 205, 103, 1) 65%,
    rgba(255, 111, 0, 0.9164040616246498) 100%
  );
  border-color: rgb(213, 220, 226) rgb(213, 220, 226) rgb(184, 194, 204);
`
export const TwPage = tw.main`
flex 
w-full
h-[100vh]
flex-col
relative
items-center

`

export const PageContainer = styled(TwPage)`
  background: rgb(57, 223, 204);
  background: radial-gradient(
    circle,
    rgba(57, 223, 204, 1) 65%,
    rgba(255, 111, 0, 0.9164040616246498) 100%
  );
`
