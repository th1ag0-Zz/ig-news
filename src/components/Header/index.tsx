import React from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

export const Header: React.FC = () => {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<img src='/images/logo.svg' alt='logo' />

				<nav>
					<a className={styles.active}>Home</a>
					<a>Posts</a>
				</nav>
			</div>
		</header>
	);
};
