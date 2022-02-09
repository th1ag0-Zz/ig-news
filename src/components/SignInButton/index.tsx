import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export const SignInButton: React.FC = () => {
	const { data: session, status } = useSession();

	return session ? (
		<button
			type='button'
			className={styles.buttonContainer}
			onClick={() => signOut()}
		>
			<FaGithub color='#04d361' />
			{'Thiago Silva'}
			<FiX color='#737380' className={styles.closeIcon} />
		</button>
	) : (
		<button
			type='button'
			className={styles.buttonContainer}
			onClick={() => signIn('github')}
		>
			<FaGithub color='#eba417' />
			Sign in with GitHub
		</button>
	);
};
