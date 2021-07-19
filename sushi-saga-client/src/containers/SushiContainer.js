import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => <Sushi eatSushi={props.eatSushi} sushi={sushi}/>)
        }
        <MoreButton handleClick={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer