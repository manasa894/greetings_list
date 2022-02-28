import '.index.css'

const LangItem = props => {
  const {langDetails} = props
  const {langName, imageUrl} = langDetails

  return (
    <li className="lang-item">
      <img className="lang-image" src={imageUrl} alt={langName} />
      <p className="lang-name">{langName}</p>
    </li>
  )
}
