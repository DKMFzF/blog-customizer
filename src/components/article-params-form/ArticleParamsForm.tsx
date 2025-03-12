import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import {
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	defaultArticleState,
	ArticleStateType,
	OptionType,
} from 'src/constants/articleProps';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';

/**
 * Боковая панель формы открытия настроек страницы
 */
export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);
	const handleOpenBtnClick = () => setIsOpen((isOpen) => !isOpen);

	const handleChange = (key: keyof ArticleStateType, value: OptionType) =>
		setArticleState((prev) => ({ ...prev, [key]: value }));

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleOpenBtnClick} />
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={clsx(styles.form)}>
					<Text as='h2' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>

					<Select
						selected={articleState.fontFamilyOption}
						onChange={(value) => handleChange('fontFamilyOption', value)}
						options={fontFamilyOptions}
						title='Шрифт'
					/>

					<RadioGroup
						selected={articleState.fontSizeOption}
						title='размер шрифта'
						name='radio'
						options={fontSizeOptions}
						onChange={(value) => handleChange('fontSizeOption', value)}
					/>

					<Select
						selected={articleState.fontColor}
						onChange={(value) => handleChange('fontColor', value)}
						options={fontColors}
						title='Цвет шрифта'
					/>

					{/* TODO: добавить разделитель */}

					<Select
						selected={articleState.backgroundColor}
						onChange={(value) => handleChange('backgroundColor', value)}
						options={backgroundColors}
						title='Цвет фона'
					/>

					<Select
						selected={articleState.contentWidth}
						onChange={(value) => handleChange('contentWidth', value)}
						options={contentWidthArr}
						title='Ширина контента'
					/>

					<div className={clsx(styles.bottomContainer)}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={() => setArticleState(defaultArticleState)}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
