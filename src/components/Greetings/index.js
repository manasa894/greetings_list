import {Component} from 'react'

import GreetingTab from '../GreetingsTab'
import {
  BackgroundContainer,
  HeaderElement,
  TabsContainer,
  ImageElement,
} from './styledComponents'

class Greetings extends Component {
  state = {
    greetingList: [],
    activeTabId: '',
    bgImageUrl: '',
  }

  componentDidMount() {
    this.getListElements()
  }

  getListElements = () => {
    const {languageGreetingsList} = this.props
    const greetList = languageGreetingsList
    this.setState({
      greetingList: greetList,
      activeTabId: greetList[0].id,
    })
  }

  onActiveTab = (id, imageUrl) => {
    this.setState({activeTabId: id, bgImageUrl: imageUrl})
  }

  render() {
    const {activeTabId, greetingList, bgImageUrl} = this.state
    return (
      <BackgroundContainer>
        <HeaderElement>Multilingual Greetings</HeaderElement>
        <TabsContainer>
          {greetingList.map(each => (
            <GreetingTab
              tabsList={each}
              key={each.id}
              isActive={activeTabId === each.id}
              onClickedButton={this.onActiveTab}
            />
          ))}
        </TabsContainer>
        <ImageElement src={bgImageUrl} alt="greeting" />
      </BackgroundContainer>
    )
  }
}
export default Greetings
