import { FC } from 'react';
import { Polyline, Svg } from 'react-native-svg';

import { IconProps } from '../types';

export const ChevronLeftIcon: FC<IconProps> = ({
	style,
	size = 24,
	color = 'white',
}) => {
	return (
		<Svg
			style={style}
			width={size}
			height={size}
			fill="none"
			stroke={color}
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			viewBox="0 0 24 24"
		>
			<Polyline points="15 18 9 12 15 6" />
		</Svg>
	);
};

export default ChevronLeftIcon;
