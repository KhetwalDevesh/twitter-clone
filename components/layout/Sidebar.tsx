import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import { BiLogOut } from "react-icons/bi";
import SidebarTweetButton from "./SidebarTweetButton";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
const Sidebar = () => {
	const { data: currentUser } = useCurrentUser();
	console.log("currentUser", JSON.stringify(currentUser, null, 2));
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
			auth: true,
			alert: currentUser?.hasNotification,
		},
		{
			icon: FaUser,
			label: "Profile",
			href: `/users/${currentUser?.id}`,
			auth: true,
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
					auth={item.auth}
					alert={item.alert}
				/>
			))}
			{currentUser && (
				<SidebarItem onClick={() => signOut()} icon={BiLogOut} label="Logout" />
			)}
			<SidebarTweetButton />
		</div>
	);
};
export default Sidebar;
