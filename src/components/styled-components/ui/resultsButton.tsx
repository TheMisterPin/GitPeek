import { Link } from 'react-router-dom'
import { GreenBox } from '../layout'
import { TextWhite } from '.'

function ResultsButton() {
  return (
    <Link to="/results" className="inline-block absolute bottom-[25%]">

      <GreenBox className="p-3">
        {' '}
        <TextWhite className="text-white">Results</TextWhite>
      </GreenBox>
    </Link>
  )
}
export default ResultsButton
