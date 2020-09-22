import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const GITHUB_ID = 'Iv1.0456d258b957d676';
const GITHUB_SECRET = 'bdb0c402229211f18614a77abc5d2041186fa9e4';

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
}

export default (req, res) => NextAuth(req, res, options)