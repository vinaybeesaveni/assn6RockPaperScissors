import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    padding: 5%;
  }
  @media screen and (min-width: 992px) {
    padding: 1%;
  }
`
export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid white;
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
  @media screen and (min-width: 992px) {
    width: 60%;
  }
`
export const GameNamesContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  color: white;
  margin: 1px;
  font-size: 23px;
  font-weight: normal;
  font-family: 'Bree Serif';
  max-width: 100px;
`
export const ScoreCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  width: 110px;
  padding: 10px;
  height: 120px;
`
export const ScorePara = styled.p`
  color: black;
  font-size: 25px;
  font-weight: bold;
  font-family: 'Bree Serif';
  margin-bottom: 0;
  margin-top: 0;
`
export const Score = styled.p`
  color: black;
  margin-bottom: 0;
  margin-top: 10px;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const ButtonsContainer = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    width: 55%;
  }
  @media screen and (min-width: 992px) {
    width: 30%;
  }
`

export const RulesButton = styled.button`
  background-color: white;
  border: none;
  font-family: 'Bree Serif';
  height: 30px;
  width: 60px;
  border-radius: 5px;
  align-self: flex-end;
`
export const PopupImage = styled.img`
  width: 250px;
  height: 250px;
  @media screen and (min-width: 768px) {
    width: 350px;
    height: 350px;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  margin-bottom: 10px;
  font-size: 20px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`
export const Modal = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
`
export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const GameViewImage = styled.img`
  width: 120px;
  height: 120px;
`
export const GameViewImagesContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
`
export const Message = styled.p`
  color: white;
  font-weight: 500;
  font-size: 27px;
`
export const PlayAgainButton = styled.button`
  background-color: white;
  border: none;
  font-family: 'Bree Serif';
  width: 130px;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
`
