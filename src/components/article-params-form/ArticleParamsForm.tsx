import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';

/**
 * боковая панель формы открытия настроек страницы
 */

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleOpenBtnClick = () => setIsOpen((isOpen) => !isOpen);

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleOpenBtnClick} />
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={clsx(styles.form)}>
					<div className={clsx(styles.bottomContainer)}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
