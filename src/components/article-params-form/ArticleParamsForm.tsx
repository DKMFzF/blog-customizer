import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import { SelectOption } from './SelectOption';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { fontFamilyOptions, fontColors } from 'src/constants/articleProps';

/**
 * Боковая панель формы открытия настроек страницы
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
					<Text as='h2' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<SelectOption title='Шрифт текста' options={fontFamilyOptions} />
					<SelectOption title='Цвет фона' options={fontColors} />
					<div className={clsx(styles.bottomContainer)}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
