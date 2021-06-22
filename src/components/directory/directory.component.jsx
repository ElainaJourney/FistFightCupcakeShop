import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import vlogImage from '../../assets/vlog.png'
import './directory.styles.scss'

class Directory extends React.Component {
    constructor(){
        super()

        this.state ={
            sections: [
                {
                    title: 'vlog',
                    imageUrl: `${vlogImage}`,
                    id: 1,
                    linkUrl: 'vlog'
                },
                {
                    title: 'gallery',
                    imageUrl: 'https://picsum.photos/1706/1152',
                    id: 2,
                    linkUrl: 'gallery'
                },
                {
                    title: 'about',
                    imageUrl: 'https://picsum.photos/1706/1152',
                    id: 3,
                    linkUrl: 'about'
                },
                {
                    title: 'shop',
                    imageUrl: 'https://picsum.photos/2560/1152',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop'
                },
                {
                    title: 'generator',
                    imageUrl: 'https://picsum.photos/2560/1152',
                    size: 'large',
                    id: 5,
                    linkUrl: 'prompts'
                }
            ]
        }
    }
    render(){
        return (
            <div className='directory-menu'>
                {
                this.state.sections.map(({id, ...sectionProps}) => (
                    <MenuItem key={id} {...sectionProps}/>
                ))}
            </div>
        )
    }
}
export default Directory