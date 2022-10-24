import {
    AiOutlineHome,
    AiOutlineCalendar,
    AiOutlineTool,
    AiOutlineTeam,
    AiOutlineDollar,
    AiOutlineSetting,
} from 'react-icons/ai';

const menuItems = [
    {
        name: 'Home',
        path: '',
        subitems: [],
        icon: <AiOutlineHome />
    },
    {
        name: 'Calendar',
        path: 'calendar',        
        subitems: [],
        icon: <AiOutlineCalendar />
    },
    {
        name: 'Inventory',
        path: 'inventory',
        subitems: [],
        icon: <AiOutlineTool />
    },
    {
        name: 'Club',
        path: 'club',
        subitems: [
            {
                name: 'Members',
                path: 'students'
            },
            {
                name: 'Payments',
                path: 'payment'
            },
        ],
        icon: <AiOutlineTeam />
    },
    {
        name: 'Finances',
        path: 'finances',
        subitems: [
            {
                name: 'Income',
                path: 'income'
            },
            {
                name: 'Bills',
                path: 'bills'
            },
        ],
        icon: <AiOutlineDollar />
    },
    {
        name: 'Settings',
        path: 'settings',
        subitems: [],
        icon: <AiOutlineSetting />
    },
]

export default menuItems;