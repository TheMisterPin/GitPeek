import { Link } from 'react-router-dom'
import { GreenBox } from '../layout'
import { TextWhite } from '.'
import { RESULTS } from '../../../routes/paths'

function ResultsButton() {
  return (
    <Link to={RESULTS} className="inline-block absolute bottom-[25%]">

      <GreenBox className="p-3">
        {' '}
        <TextWhite className="text-white">Results</TextWhite>
      </GreenBox>
    </Link>
  )
}
export default ResultsButton
