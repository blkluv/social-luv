import React from "react";
import { NavLink } from "react-router-dom";
import {
WalletModalProvider,
WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import iconHome from '../icons/home.png';
import iconLuv from '../icons/luv.png';
import iconLuvrs from '../icons/luvrs.png';
import iconLogo192 from '../icons/logo192.png';
import iconProfile from '../icons/profile.png';

const SideButton = ({ activeIcon, inactiveIcon, text, to }) => {
return (
<NavLink
to={to}
children={({ isActive }) =>
isActive ? (
<div className="rounded-full hover:bg-gray-100 p-3 md:w-full inline-flex items-center space-x-4">
{activeIcon}
<div className="text-xl hidden md:block font-bold">{text}</div>
</div>
) : (
<div className="rounded-full hover:bg-gray-100 p-3 md:w-full inline-flex items-center space-x-4">
{inactiveIcon}
<div className="text-xl hidden md:block">{text}</div>
</div>
)
}
/>
);
};

const Sidebar = () => {
const { connected } = useWallet();

return (
<aside className="flex flex-col items-center md:items-stretch space-y-2 md:space-y-4">
<NavLink
to="/"
className="inline-block rounded-full hover:bg-gray-100 p-3 md:self-start"
>
<img src={iconLogo192.png} style={{'width':'50px'},{'height':'50px'}} alt= 'logo' />
</NavLink>
<div className="flex flex-col items-center md:items-stretch space-y-2">
<SideButton
to="/"
activeIcon={
<img src={iconHome} style={{'width':'50px'},{'height':'50px'}} alt= 'home'/>
}
inactiveIcon={
<img src={iconHome} style={{'width':'50px'},{'height':'50px'}} alt= 'home'/>
}
text="HOME"
/>

<SideButton
to="/topics"
activeIcon={
<img src={iconLuv} style={{'width':'50px'},{'height':'50px'}} alt= 'luv'/>
}
inactiveIcon={
<img src={iconLuv} style={{'width':'50px'},{'height':'50px'}} alt= 'luv' />
}
text="LUV NFTS"
/>

<SideButton
to="/users"
activeIcon={
<img src={iconLuvrs} style={{'width':'50px'},{'height':'50px'}} alt= 'luvrs'/>
}
inactiveIcon={
<img src={iconLuvrs} style={{'width':'50px'},{'height':'50px'}} alt= 'luvrs'/>
}
text="LUVRS"
/>

{/* Check if connected wallet. */}
{connected && (
<SideButton
to="/profile"
activeIcon={
<img src={iconProfile} style={{'width':'50px'},{'height':'50px'}} alt= 'profile'/>
}
inactiveIcon={
<img src={iconProfile} style={{'width':'50px'},{'height':'50px'}} alt= 'profile'/>
}
text="PROFILE"
/>
)}
</div>
<div className="fixed bottom-8 right-8 md:static w-48 md:w-full">
{/* Connect wallet */}
<WalletModalProvider>
<WalletMultiButton></WalletMultiButton>
</WalletModalProvider>
</div>
</aside>
);
};

export default Sidebar;