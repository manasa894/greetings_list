import styled from 'styled-components'

export const GreetingTabItem = styled.li`
  width: 25%;
`
export const ButtonElement = styled.button`
  background-color: ${props => (props.active ? '#db1c48' : '#fff')};
  border: none;
  border-radius: 10px;
  width: 60px;
  height: 40px;
`
