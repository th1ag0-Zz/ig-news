import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export const SignInButton: React.FC = () => {
	const [isUserLoggedIn] = useState(false);
	const [userName] = useState('Thiago Silva');

	return isUserLoggedIn ? (
		<button type='button' className={styles.buttonContainer}>
			<FaGithub color='#04d361' />
			{userName}
			<FiX color='#737380' className={styles.closeIcon} />
		</button>
	) : (
		<button type='button' className={styles.buttonContainer}>
			<FaGithub color='#eba417' />
			Sign in with GitHub
		</button>
	);
};
