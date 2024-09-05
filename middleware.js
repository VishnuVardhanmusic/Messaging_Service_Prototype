import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});
// Restrict the intruders to not enter the below paths without prior Login 
export const config = { 
  matcher: [
    "/chats/:path*",
    "/contacts/:path*",
    "/profile/:path*",
  ]
};