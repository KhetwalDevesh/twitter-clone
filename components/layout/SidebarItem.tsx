import { IconType } from "react-icons/lib/esm/iconBase";
interface SidebarItemProps {
	label: string;
	icon: IconType;
	href?: string;
	onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
	label,
	icon: Icon,
	href,
}) => {
	return (
		<div className="hover:bg-opacity-10 hover:bg-slate-300 cursor-pointer flex gap-4 rounded-full p-4 items-center">
			<Icon size={28} color="white" />
			<p className="text-white text-xl">{label}</p>
		</div>
	);
};
export default SidebarItem;
