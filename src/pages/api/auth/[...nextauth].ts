import { query as q } from 'faunadb';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import { fauna } from '../../../services/fauna';

export default NextAuth({
	secret: 'c48110bec3106bd48248bd04f97838ab',
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async signIn({ user, account, profile }) {
			try {
				const { email } = user;

				await fauna.query(
					q.If(
						q.Not(
							q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(email))),
						),
						q.Create(q.Collection('users'), { data: email }),
						q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email))),
					),
				);

				return true;
			} catch (error) {
				return false;
			}
		},
	},
});
