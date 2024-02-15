import styled, { keyframes } from 'styled-components'

// Define the keyframes for the animation
const loading = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #c0c0c0;
  }
  100% {
    background-color: #e0e0e0;
  }
`

const SkeletonWrapper = styled.div`
  margin: 20px 0;
`

const SkeletonTitle = styled.div`
  width: 70%;
  height: 20px;
  background-color: #eee;
  margin: 10px 0;
  border-radius: 4px;
  animation: ${loading} 1.5s infinite ease-in-out;
`

const SkeletonText = styled.div`
  width: 100%;
  height: 14px;
  background-color: #eee;
  margin: 10px 0;
  border-radius: 4px;
  animation: ${loading} 1.5s infinite ease-in-out;
`

function MockSkeletonPlaceholder() {
  return (
    <SkeletonWrapper>
      <SkeletonTitle />
      <SkeletonText />
      <SkeletonText />
    </SkeletonWrapper>
  )
}

export default MockSkeletonPlaceholder
