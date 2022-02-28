import {Component} from 'react'

import TabItem from '../TabItem'
import LangItem from '../LangItem'

import './index.css' 

const tabsList=[
    {tabId:'ENGLISH',displayText:'English'},
    {tabId:'TAMIL',displayText:'Tamil'},
    {tabId:'TELUGU',displayText:'Telugu'},

]

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component{
    state={
        activeTabId:tabsList[0].tabId,
    }

    setActiveTabId=tabId=>{
        this.setState({activeTabId:tabId})
    }
}

getActiveTabNames= clickNames=>{
    const {activeTabId}=this.state
    const filteredNames=clickNames.filter(
        eachClickNames => eachClickNames.category=activeTabId,
    )
    return filteredNames
}

render() {
    const {activeTabId}=this.state 
    const filteredNames=this.getActiveTabNames()

    return (
        <div className="greet-container">
        <div className="container">
            <h1 className="heading">Multilingual Greetings</h1>
            <img src={languageGreetingsList} alt="imageAltText" className="icon"/>
       
        <ul className="lang-list">
            {tabsList.map(eachTab=>(
                <TabItem 
                key={eachTab.tabId}
                tabDetails={eachTab}
                setActiveTabId={this.setActiveTabId}
                isActive={activeTabId= eachTab.tabId}/>
            ))}
        </ul>
        <ul className="active-list">
            {filteredNames.map(eachName=>(
                <LangItem key={eachName.id} langDetails={eachName}/>
            )

            )}
        </ul>
        </div>
        </div>
    )
}
}
export default Greetings