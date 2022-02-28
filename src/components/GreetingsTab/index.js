import {GreetingTabItem, ButtonElement} from './styledComponents'

const GreetingTab = props => {
  const {tabsList, isActive, onClickedButton} = props
  const {id, buttonText, imageUrl} = tabsList
  const onSelectButton = () => {
    onClickedButton(id, imageUrl)
  }

  return (
    <GreetingTabItem>
      <ButtonElement type="button" active={isActive} onClick={onSelectButton}>
        {buttonText}
      </ButtonElement>
    </GreetingTabItem>
  )
}
export default GreetingTab
