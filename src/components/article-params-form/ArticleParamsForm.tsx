import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Text } from 'src/ui/text';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useState, useEffect } from 'react';
import {
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	ArticleStateType,
	OptionType,
} from 'src/constants/articleProps';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

type ArticleParamsFormProps = {
	articleState: ArticleStateType;
	onChange: (key: keyof ArticleStateType, value: OptionType) => void;
	onReset: () => void;
};

/**
 * компонент сайд бара
 */

export const ArticleParamsForm = ({
	articleState,
	onChange,
	onReset,
}: ArticleParamsFormProps) => {
	const [formState, setFormState] = useState<ArticleStateType>(articleState);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	useEffect(() => {
		setFormState(articleState);
	}, [articleState]);

	const handleOpenBtnClick = () => setIsMenuOpen((isMenuOpen) => !isMenuOpen);

	const handleFormChange = (key: keyof ArticleStateType, value: OptionType) =>
		setFormState((prev) => ({ ...prev, [key]: value }));

	const handleApply = (e: React.FormEvent) => {
		e.preventDefault();
		(Object.keys(formState) as (keyof ArticleStateType)[]).forEach((key) =>
			onChange(key, formState[key])
		);
	};

	return (
		<>
			<ArrowButton isOpen={isMenuOpen} onClick={handleOpenBtnClick} />
			<aside
				className={clsx(styles.container, isMenuOpen && styles.container_open)}>
				<form className={clsx(styles.form)} onSubmit={handleApply}>
					<Text as='h2' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>

					<Select
						selected={formState.fontFamilyOption}
						onChange={(value) => handleFormChange('fontFamilyOption', value)}
						options={fontFamilyOptions}
						title='Шрифт'
					/>

					<RadioGroup
						selected={formState.fontSizeOption}
						title='размер шрифта'
						name='radio'
						options={fontSizeOptions}
						onChange={(value) => handleFormChange('fontSizeOption', value)}
					/>

					<Select
						selected={formState.fontColor}
						onChange={(value) => handleFormChange('fontColor', value)}
						options={fontColors}
						title='Цвет шрифта'
					/>

					<Separator />

					<Select
						selected={formState.backgroundColor}
						onChange={(value) => handleFormChange('backgroundColor', value)}
						options={backgroundColors}
						title='Цвет фона'
					/>

					<Select
						selected={formState.contentWidth}
						onChange={(value) => handleFormChange('contentWidth', value)}
						options={contentWidthArr}
						title='Ширина контента'
					/>

					<div className={clsx(styles.bottomContainer)}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={onReset}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
