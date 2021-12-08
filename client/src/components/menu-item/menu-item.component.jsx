
import { withRouter } from "react-router-dom"
import { BackgroundImageContainer, MenuItemContainer } from './menu-item.styles'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer 
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer
            style={{backgroundImage: `${imageUrl}`}}></BackgroundImageContainer>
        
    </ MenuItemContainer>
)

export default withRouter(MenuItem)