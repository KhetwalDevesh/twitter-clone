import { useRouter } from "next/router";
import { IconType } from "react-icons/lib/esm/iconBase";
import { useCallback } from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { BsDot } from "react-icons/bs";
interface SidebarItemProps {
	label: string;
	icon: IconType;
	href?: string;
	onClick?: () => void;
	auth?: boolean;
	alert?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
	label,
	icon: Icon,
	href,
	onClick,
	auth,
	alert,
}) => {
	const loginModal = useLoginModal();
	const { data: currentUser } = useCurrentUser();
	const router = useRouter();
	const handleClick = useCallback(() => {
		if (onClick) {
			return onClick();
		}
		if (auth && !currentUser) {
			loginModal.onOpen();
		} else if (href) {
			router.push(href);
		}
	}, [router, onClick, href, currentUser, auth, loginModal]);
	return (
		<div
			onClick={handleClick}
			className="relative hover:bg-opacity-10 hover:bg-slate-300 cursor-pointer flex gap-4 rounded-full p-4 items-center">
			<Icon size={24} color="white" />
			<p className="text-white text-xl">{label}</p>
			{alert ? (
				<BsDot className="text-sky-500 absolute -top-4 left-0" size={70} />
			) : null}
		</div>
	);
};
export default SidebarItem;
