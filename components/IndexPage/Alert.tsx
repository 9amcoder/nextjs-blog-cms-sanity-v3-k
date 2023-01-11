interface Props {
  message1: string
  message2?: string
  message3?: string
}
import './Alert.css'
import styled, { keyframes } from 'styled-components'

const moveFromLeftToRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`

const AnimationSpan = styled.span`
  animation: ${moveFromLeftToRight} 10s linear infinite;
`

const AlertDiv = styled.div`
  background: linear-gradient(
    90deg,
    rgba(33, 253, 29, 0.5186668417366946) 2%,
    rgba(33, 253, 29, 0.28617384453781514) 13%,
    rgba(243, 186, 57, 1) 34%,
    rgba(242, 199, 59, 0.36740633753501406) 62%,
    rgba(239, 252, 69, 0.24975927871148462) 89%
  );
`

const Alert = (props: Props) => {
  const { message1, message2, message3 } = props

  return (
    <div className="flex justify-center">
      <AlertDiv className="alert alert-info grid grid-cols-4 items-center shadow-lg">
        <AnimationSpan className="moveFromLeftToRight col-start-1 col-end-2">
          {message1}
        </AnimationSpan>
        <AnimationSpan className="moveFromLeftToRight col-start-2 col-end-3">
          {message2}
        </AnimationSpan>
        <AnimationSpan className="moveFromLeftToRight col-start-3 col-end-4">
          {message3}
        </AnimationSpan>
      </AlertDiv>
    </div>
  )
}

export default Alert
