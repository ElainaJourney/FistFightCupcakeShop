import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import vlogImage from '../../assets/images/vlog.png'
import galleryImage from '../../assets/images/gallery.png'
import aboutImage from '../../assets/images/about.png'
import shopImage from '../../assets/images/store.png'
import promptsImage from '../../assets/images/prompts.png'
import commissionsImage from '../../assets/images/commissions.png'
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
                    imageUrl: `${galleryImage}`,
                    id: 2,
                    linkUrl: 'gallery' 
                },
                {
                    title: 'about',
                    imageUrl: `${aboutImage}`,
                    id: 3,
                    linkUrl: 'about'
                },
                {
                    title: 'shop',
                    imageUrl: `${shopImage}`,
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop'
                },
                {
                    title: 'generator',
                    imageUrl: `${promptsImage}`,
                    size: 'large',
                    id: 5,
                    linkUrl: 'prompts'
                },
                {
                    title: 'commissions',
                    imageUrl: `${commissionsImage}`,
                    size: 'full',
                    id: 6,
                    linkUrl: 'commissions'
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