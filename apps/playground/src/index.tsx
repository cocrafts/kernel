import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { featherIcons, stormIcons } from '@metacraft/icons';

const { Info, Copy, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } =
	featherIcons;
const { Dragon, StormGate, Flag } = stormIcons;

export const AppContainer: FC = () => {
	return (
		<View style={styles.container}>
			<Info />
			<Copy />
			<ChevronUp />
			<ChevronDown />
			<ChevronLeft />
			<ChevronRight />
			<StormGate />
			<Dragon />
			<Flag />
		</View>
	);
};

export default AppContainer;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'red',
	},
});
