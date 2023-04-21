import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import { BiLogOut } from "react-icons/bi";
import SidebarTweetButton from "./SidebarTweetButton";
const Sidebar = () => {
	const items = [
		{
			icon: BsHouseFill,
			label: "Home",
			href: "/",
		},
		{
			icon: BsBellFill,
			label: "Notifications",
			href: "/notifications",
		},
		{
			icon: FaUser,
			label: "Profile",
			href: "/users/123",
		},
	];
	return (
		<div className="space-y-2">
			<SidebarLogo />
			{items.map((item) => (
				<SidebarItem
					key={item.href}
					label={item.label}
					href={item.href}
					icon={item.icon}
				/>
			))}
			<SidebarItem icon={BiLogOut} label="Logout" />
			<SidebarTweetButton />
		</div>
	);
};
export default Sidebar;