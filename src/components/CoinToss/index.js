import {Component} from 'react'
import './index.css'

// Write your code here

class CoinToss extends Component {
  state = {
    headTail: 'heads',
    totalTosses: 0,
    totalHeads: 0,
    totalTails: 0,
  }

  handleOnClick = () => {
    const toss = Math.floor(Math.random() * 2)
    const tossResult = toss === 0 ? 'heads' : 'tails'
    // console.log(toss, tossResult)
    this.setState(prevState => {
      const updateHeads = tossResult === 'heads' ? 1 : 0
      const updateTails = tossResult === 'tails' ? 1 : 0
      return {
        headTail: tossResult,
        totalTosses: prevState.totalTosses + 1,
        totalHeads: prevState.totalHeads + updateHeads,
        totalTails: prevState.totalTails + updateTails,
      }
    })
  }

  render() {
    const {headTail, totalTosses, totalHeads, totalTails} = this.state
    // console.log(headTail)
    const headTailsElement =
      headTail !== 'tails' ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          className="card-image"
          alt="toss result"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          className="card-image"
          alt="toss result"
        />
      )

    console.log(headTailsElement)
    return (
      <div className="page">
        <div className="card">
          <h1 className="card-main-heading">Coin Toss Game</h1>
          <p className="card-main-para">Heads (or) Tails</p>
          {headTailsElement}
          <div>
            <button
              type="button"
              className="toss-btn"
              onClick={this.handleOnClick}
            >
              Toss Coin
            </button>
          </div>
          <div className="toss-stats-container">
            <p className="toss-stats-element">Total: {totalTosses}</p>
            <p className="toss-stats-element">Heads: {totalHeads}</p>
            <p className="toss-stats-element">Tails: {totalTails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
