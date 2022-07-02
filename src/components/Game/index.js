import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import Images from '../Images'

import {
  MainContainer,
  Card,
  GameNamesContainer,
  Heading,
  ScoreCard,
  ScorePara,
  Score,
  ButtonsContainer,
  RulesButton,
  PopupImage,
  PopupContainer,
  Modal,
  CloseButton,
  GameViewContainer,
  GameViewImage,
  GameViewImagesContainer,
  Message,
  PlayAgainButton,
} from './styledComponents'

class Game extends Component {
  state = {
    showGameView: false,
    userPressedImage: {},
    randomImage: {},
    score: 0,
    message: '',
  }

  toggleGameView = item => {
    // item is user pressed Image
    const {list} = this.props
    let {score, message} = this.state
    const randomItem = list[Math.floor(Math.random() * 3)]
    if (item.id === randomItem.id) {
      message = 'IT IS DRAW'
    } else if (item.id === 'ROCK' && randomItem.id === 'SCISSORS') {
      score += 1
      message = 'YOU WON'
    } else if (item.id === 'ROCK' && randomItem.id === 'PAPER') {
      score -= 1
      message = 'YOU LOSE'
    } else if (item.id === 'SCISSORS' && randomItem.id === 'ROCK') {
      score -= 1
      message = 'YOU LOSE'
    } else if (item.id === 'SCISSORS' && randomItem.id === 'PAPER') {
      score += 1
      message = 'YOU WON'
    } else if (item.id === 'PAPER' && randomItem.id === 'ROCK') {
      score += 1
      message = 'YOU WON'
    } else if (item.id === 'PAPER' && randomItem.id === 'SCISSORS') {
      score -= 1
      message = 'YOU LOSE'
    }

    this.setState({
      showGameView: true,
      userPressedImage: item,
      randomImage: randomItem,
      score,
      message,
    })
  }

  hideGameView = () => {
    this.setState({showGameView: false})
  }

  renderGameView = () => {
    const {randomImage, userPressedImage, message} = this.state
    return (
      <GameViewContainer>
        <GameViewImagesContainer>
          <GameViewImage src={userPressedImage.imageUrl} alt="your choice" />
          <GameViewImage src={randomImage.imageUrl} alt="opponent choice" />
        </GameViewImagesContainer>
        <Message>{message}</Message>
        <PlayAgainButton type="button" onClick={this.hideGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameViewContainer>
    )
  }

  render() {
    const {list} = this.props
    const {showGameView, score} = this.state
    return (
      <MainContainer>
        <Card>
          <GameNamesContainer>
            <Heading>Rock Paper Scissors</Heading>
          </GameNamesContainer>
          <ScoreCard>
            <ScorePara>Score</ScorePara>
            <Score>{score}</Score>
          </ScoreCard>
        </Card>
        {showGameView ? (
          this.renderGameView()
        ) : (
          <ButtonsContainer>
            {list.map(each => (
              <Images
                key={each.id}
                item={each}
                toggleGameView={this.toggleGameView}
              />
            ))}
          </ButtonsContainer>
        )}

        <PopupContainer>
          <Popup modal trigger={<RulesButton>RULES</RulesButton>}>
            {close => (
              <Modal>
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
                <PopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </Modal>
            )}
          </Popup>
        </PopupContainer>
      </MainContainer>
    )
  }
}

export default Game
