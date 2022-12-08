import React from 'react'
import { NavLink } from 'react-router-dom';

import { MenuItemProps } from '.';

type Props = {
    item: MenuItemProps;
}

const NavLinkItem = ({ item }: Props) => {
    const itemClassName = "flex items-center h-9";
  
    return (
        <NavLink 
            to={item.path}                                                       
            className={({ isActive }) => isActive 
            ? itemClassName + ' '
            : itemClassName + ' opacity-60 hover:opacity-100 transition-all duration-300'
            }
        >                        
            {item.icon}
            <p className="text-sm ml-2 ">{item.name}</p>                         
        </NavLink>
    )
}

export default NavLinkItem