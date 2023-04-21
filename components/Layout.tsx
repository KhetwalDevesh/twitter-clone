import FollowBar from "./layout/FollowBar";
import Sidebar from "./layout/Sidebar";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="grid grid-cols-4 px-8">
			<Sidebar />
			<div className="border-x-2 border-gray-400 h-screen col-span-2">
				{children}
			</div>
			<FollowBar />
		</div>
	);
};
export default Layout;
