import {
    AiOutlineHome,
    AiOutlineCalendar,
    AiOutlineTool,
    AiOutlineTeam,
    AiOutlineDollar,
    AiOutlineSetting,
} from 'react-icons/ai';

const items = [
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
        subitems: [
            {
                name: 'Bows',
                path: 'inventory'
            },
            {
                name: 'Arrows',
                path: 'addItem'
            },
            {
                name: 'Other',
                path: 'addItem'
            },
        ],
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
        name: 'Financeiro',
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

export default items;