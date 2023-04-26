import { useCallback } from "react";
import LoginModal from "../modals/LoginModal";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import useCurrentUser from "@/hooks/useCurrentUser";

const SidebarTweetButton = () => {
	const loginModal = useLoginModal();
	const router = useRouter();
	const { data: currentUser } = useCurrentUser();
	const onClick = useCallback(() => {
		if (!currentUser) {
			return loginModal.onOpen();
		}
		router.push("/");
	}, [loginModal, router, currentUser]);
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
