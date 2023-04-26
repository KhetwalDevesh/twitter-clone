import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "@/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await getServerSession(req, res, authOptions);
	// console.log("session", JSON.stringify(session, null, 2));
	if (!session?.user?.email) {
		throw new Error("Not signed in");
	}

	const currentUser = await prisma?.user.findUnique({
		where: {
			email: session.user.email,
		},
	});
	// console.log("currentUser", JSON.stringify(currentUser, null, 2));
	if (!currentUser) {
		throw new Error("Not signed in");
	}
	return { currentUser };
};

export default serverAuth;
