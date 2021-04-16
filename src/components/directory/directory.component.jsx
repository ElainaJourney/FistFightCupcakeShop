import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component {
    constructor(){
        super()

        this.state ={
            sections: [
                {
                    title: 'vlog',
                    imageUrl: 'https://picsum.photos/1706/1152',
                    id: 1
                },
                {
                    title: 'gallery',
                    imageUrl: 'https://picsum.photos/1706/1152',
                    id: 2
                },
                {
                    title: 'about',
                    imageUrl: 'https://picsum.photos/1706/1152',
                    id: 3
                },
                {
                    title: 'shop',
                    imageUrl: 'https://picsum.photos/2560/1152',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'generator',
                    imageUrl: 'https://picsum.photos/2560/1152',
                    size: 'large',
                    id: 5
                }
            ]
        }
    }
    render(){
        return (
            <div className='directory-menu'>
                {
                this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))}
            </div>
        )
    }
}
export default Directory