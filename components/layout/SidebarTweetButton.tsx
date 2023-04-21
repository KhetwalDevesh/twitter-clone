import { useCallback } from "react";
import LoginModal from "../modals/LoginModal";
import useLoginModal from "@/hooks/useLoginModal";

const SidebarTweetButton = () => {
	const loginModal = useLoginModal();
	const onClick = useCallback(() => {
		loginModal.onOpen();
	}, [LoginModal]);
	return (
		<div>
			<div
				onClick={onClick}
				className="bg-sky-500 p-4 rounded-full m-2  hover:bg-opacity-90 
        cursor-pointer">
				<p className="text-white text-xl text-center font-semibold">Tweet</p>
			</div>
		</div>
	);
};
export default SidebarTweetButton;
