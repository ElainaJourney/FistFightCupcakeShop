
import styled from 'styled-components';

const handleOptionSize = size => {
    switch(size){
        case "large":
            return "310px"
        case "full":
            return "100vw"
        default:
            return "240px"
    }
}

export const MenuItemContainer = styled.div`
    height: 240px;
	width: ${({ size }) => handleOptionSize(size)};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;
	&:hover {
		cursor: pointer;
		transform: scale(1.02);
		transition: transform 0.25s cubic-bezier(0.35, 0.65, 0.55, 0.95);
	}
	&:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

