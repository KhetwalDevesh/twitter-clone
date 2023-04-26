import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
	isOpen?: boolean;
	onClose?: () => void;
	onSubmit?: () => void;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	actionLabel: string;
	disabled?: boolean;
}

// @ts-ignore
const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	body,
	footer,
	actionLabel,
	disabled,
}) => {
	if (disabled) {
		return;
	}
	// const handleClose = useCallback(() => {
	// 	if (disabled) {
	// 		return;
	// 	}
	// 	onClose();
	// }, [onClose, disabled]);

	if (!isOpen) {
		return null;
	}
	return (
		<>
			<div className="h-full w-full flex justify-center items-center fixed bg-neutral-800 bg-opacity-70 z-50">
				<div className="w-3/6 bg-black rounded-lg shadow-lg flex flex-col p-10 space-y-20">
					<div className="flex justify-center">
						<h3 className="text-3xl font-semibold text-white">{title}</h3>
						<button
							className="
                  p-1 
                  ml-auto
                  border-0 
                  text-white 
                  hover:opacity-70
                  transition
                ">
							<AiOutlineClose size={20} onClick={onClose} />
						</button>
					</div>
					<div>{body}</div>
					<div className="flex flex-col gap-2 mt-8">
						<Button
							label={actionLabel}
							secondary
							fullWidth
							large
							onClick={onSubmit}
						/>
						{footer}
					</div>
				</div>
			</div>
		</>
	);
};
export default Modal;
