import React, { FC } from 'react';
import { Path, Rect, Svg } from 'react-native-svg';

import { IconProps } from '../types';

export const CopyIcon: FC<IconProps> = ({
	style,
	size = 24,
	color = '#666666',
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
			<Rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
			<Path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
		</Svg>
	);
};

export default CopyIcon;
