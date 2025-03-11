import { Select } from 'src/ui/select';
import { useState } from 'react';
import { OptionType } from 'src/constants/articleProps';

type SelectOptionProps = {
	title: string;
	options: OptionType[];
	onChange?: (selected: OptionType) => void;
};

/**
 * компонент для упращения пользования select
 */

export const SelectOption = (props: SelectOptionProps) => {
	const { title, options, onChange } = props;
	const [selected, setSelected] = useState<OptionType>(options[0]);

	const handleChange = (option: OptionType) => {
		setSelected(option);
		onChange?.(option);
	};

	return (
		<Select
			selected={selected}
			onChange={handleChange}
			options={options}
			title={title}
		/>
	);
};
