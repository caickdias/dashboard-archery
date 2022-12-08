import React from 'react'
import { NavLink } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';

import { MenuItemProps } from '.';

type Props = {
    item: MenuItemProps;
    showSubMenu: boolean;
    onClickItem: (name: string) => void;
}

const SUB_ITEM_HEIGHT = 28;

const MenuItem = ({ item, showSubMenu=false, onClickItem }: Props) => {

    const itemClassName = "flex items-center h-9";
    const subItemClassName = "flex items-center h-7 pl-6";
  
    return (
        <>
            <button 
                className={itemClassName + ' flex justify-between opacity-60 w-full hover:opacity-100 transition-all duration-300'} 
                onClick={() => onClickItem(item.name)}                                    
            >
                <div className='flex flex-row items-center justify-center'>
                    {item.icon}
                    <p className="text-sm ml-2 ">{item.name}</p>  
                </div>

                <div className=''>
                    <FiChevronRight className={`${showSubMenu && 'rotate-90'} transition-all`} />                                    
                </div>        
            </button>
            
            <div 
                className='transition-all duration-300' 
                style={{ height: `${showSubMenu ? item.subitems.length * SUB_ITEM_HEIGHT+'px' : 0}` }}
            >
                
            {   
                showSubMenu && item.subitems.map(subitem => {
                    return(
                        <NavLink
                            to={subitem.path}   
                            key={subitem.name}                                             
                            className={({ isActive }) => isActive 
                            ? subItemClassName + ' pl-6'
                            : subItemClassName + ' opacity-60 h-6 hover:opacity-100 transition-all duration-300'
                            }
                        >
                            <p className="text-sm ml-2 ">{subitem.name}</p>
                        </NavLink>
                    )
                })
            }
            </div>
        </>
    )
}

export default MenuItem