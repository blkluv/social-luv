import React from "react";
import { NavLink } from "react-router-dom";
import {
WalletModalProvider,
WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

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
<img src={require('../icons/home.png')} style={{'width':'100px'},{'height':'100px'}} />
</NavLink>
<div className="flex flex-col items-center md:items-stretch space-y-2">
<SideButton
to="/"
activeIcon={
<img src={require('../icons/home.png')} style={{'width':'100px'},{'height':'100px'}} />
}
inactiveIcon={
<img src={require('../icons/home.png')} style={{'width':'100px'},{'height':'100px'}} />
}
text="HOME"
/>

<SideButton
to="/topics"
activeIcon={
<img src={require('../icons/luv.png')} style={{'width':'100px'},{'height':'100px'}} />
}
inactiveIcon={
<img src={require('../icons/luv.png')} style={{'width':'100px'},{'height':'100px'}} />
}
text="LUV NFTS"
/>

<SideButton
to="/users"
activeIcon={
<img src={require('../icons/luvrs.png')} style={{'width':'100px'},{'height':'100px'}}/>
}
inactiveIcon={
<img src={require('../icons/luvrs.png')} style={{'width':'100px'},{'height':'100px'}} />
}
text="LUVRS"
/>

{/* Check if connected wallet. */}
{connected && (
<SideButton
to="/profile"
activeIcon={
<img src={require('../icons/profile.png')} style={{'width':'100px'},{'height':'100px'}} />
}
inactiveIcon={
<img src={require('../icons/profile.png')} style={{'width':'100px'},{'height':'100px'}} />
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