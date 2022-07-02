import {Button, Image} from './styledComponents'

const Images = props => {
  const {item, toggleGameView} = props

  const onClickingImg = () => {
    toggleGameView(item)
  }

  return (
    <li key={item.id}>
      <Button
        type="button"
        onClick={onClickingImg}
        data-testid={`${item.id.toLowerCase()}Button`}
      >
        <Image src={item.imageUrl} alt={item.id} />
      </Button>
    </li>
  )
}

export default Images
