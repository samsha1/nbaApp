import React from 'react';

import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import style from './sideNav.css';

const SideNavItems = () => {

    const Items = [
        {
            type: style.options,
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: style.options,
            icon: 'file-text-o',
            text: 'News',
            link: '/news'
        },
        {
            type: style.options,
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        }
    ]

    const showItems = () => {

        return Items.map((item,i) => {
            return (
                <div className = {item.type} key= {i}>
                    <Link to = {item.link}> 
                        <FontAwesome name= {item.icon}/> {item.text}
                    </Link>
                </div>
            )
        })

    }


    return (
        <div>
            {showItems()}
        </div>
    )

}


export default SideNavItems;