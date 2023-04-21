import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";

const RegisterModal = () => {
	const loginModal = useLoginModal();
	const registerModal = useRegisterModal();

	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const onToggle = useCallback(async () => {
		if (isLoading) {
			return;
		}
		registerModal.onClose();
		loginModal.onOpen();
	}, [isLoading, registerModal, loginModal]);

	const onSubmit = useCallback(async () => {
		try {
			setIsLoading(true);
			registerModal.onClose();
		} catch (error) {
			setIsLoading(false);
		}
	}, [registerModal]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Input
				placeholder="Email"
				value={email}
				disabled={isLoading}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<Input
				placeholder="Name"
				value={name}
				disabled={isLoading}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<Input
				placeholder="Username"
				value={username}
				disabled={isLoading}
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			/>
			<Input
				placeholder="Password"
				value={password}
				disabled={isLoading}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
		</div>
	);

	const footerContent = (
		<div className="text-neutral-400 text-center mt-4">
			<p>
				Already have an account?{" "}
				<span
					onClick={onToggle}
					className="
                text-white
                 cursor-pointer
                 hover:underline
                ">
					Sign In
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title="Create an account"
			actionLabel="Register"
			onClose={registerModal.onClose}
			onSubmit={onSubmit}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};
export default RegisterModal;
