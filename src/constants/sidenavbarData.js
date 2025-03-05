import { MdBusinessCenter, MdImportContacts, MdSpaceDashboard } from 'react-icons/md'
import { BiSlider } from 'react-icons/bi';
import { PiHeadsetFill } from 'react-icons/pi';

const sidenavbarData = [
    {
        id: 1,
        label: "Home",
        path: "/",
        icon: MdSpaceDashboard,
    },
    {
        id: 2,
        label: "Services",
        path: "/services",
        icon: BiSlider,
    },
    {
        id: 3,
        label: "Portfolio",
        path: "/portfolio",
        icon: MdBusinessCenter,
    },
    {
        id: 4,
        label: "About Me",
        path: "/me",
        icon: MdImportContacts,
    },
    {
        id: 5,
        label: "Contact Me",
        path: "/contact",
        icon: PiHeadsetFill,
    }
]

export default sidenavbarData