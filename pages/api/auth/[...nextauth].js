import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.Google_ID,
            clientSecret: process.env.Google_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            },

        })
    ],

    theme: {
        colorScheme: "light",
    },
    callbacks: {
        async jwt({ token }) {
            token.userRole = "admin"
            return token
        },
    }
})