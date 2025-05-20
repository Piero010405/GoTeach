import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credenciales",
      credentials: {
        email: { label: "Correo", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        const users = [
          {
            id: "1",
            name: "Alumno Demo",
            email: "alumno@goteach.com",
            password: "123",
            image: "/img/alumno.jpg",
            role: "alumno",
          },
          {
            id: "2",
            name: "Mentor Demo",
            email: "mentor@goteach.com",
            password: "123",
            image: "/img/mentor1.jpg",
            role: "mentor",
          },
        ];

        const user = users.find(
          (u) =>
            u.email === credentials?.email &&
            u.password === credentials?.password
        );

        if (user) {
          // Nunca retornes la contraseña
          const { password, ...safeUser } = user;
          return safeUser;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
