import React, { useState, useEffect, useContext } from 'react'

import menuItems from '../../data/sidebar';
import Title from './Title';
import Avatar from './Avatar';
import MenuItem from './MenuItem';
import NavLinkItem from './NavLinkItem';

import AppContext from '../../context/App/Context';

const fakeUser = {
  name: 'Caick Andrade',
  role: 'admin',
}

export type SubMenuItemProps = {
  name: string;
  path: string;
}

export type MenuItemProps = SubMenuItemProps & {
  subitems: SubMenuItemProps[];
  icon: any;
}

const Sidebar = () => {

  const { name, role } = fakeUser;
  const [showSubItems, setShowSubItems] = useState<any>({});
  const { setToken } = useContext<any>(AppContext);

  useEffect(() =>{      
      //create menu subitems display handler
      menuItems.forEach(item => {            
          setShowSubItems((prev: any) =>({
              ...prev,
              [item.name]: false,
          }))
      })
  }, []);

  const handleClickItem = (name: string) => {
      setShowSubItems({...showSubItems, [name]: !showSubItems[name]})
      
  }

  return (
    <div className='flex flex-col h-screen w-1/5 p-4 text-white bg-[#2f3640]'>        
        
      <Title />

      <Avatar name={name} role={role} />        

      {
        menuItems.map((item: MenuItemProps) => {
          return(
            item.subitems.length > 0 
            ?
              <MenuItem 
                key={item.name} 
                item={item} 
                showSubMenu={showSubItems[item.name]}
                onClickItem={handleClickItem}
              />
            :
              <NavLinkItem
                key={item.name} 
                item={item}
              />
          )
        })
      }

      <div className='flex justify-end p-4'>
          <button 
              className='flex text-xs opacity-60 hover:opacity-100 align-top'
              onClick={() => {
                setToken(null);
                
              }}
          >
              Logout
          </button>
      </div>
        
    </div>
  )
}

export default Sidebar