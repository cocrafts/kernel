import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { featherIcons } from '@cocrafts/icon';
import { Text } from '@metacraft/ui';

const { Info, Copy } = featherIcons;

export const AppContainer: FC = () => {
	return (
		<View style={styles.container}>
			<Info />
			<Copy />
			<Text>AppContainer</Text>
		</View>
	);
};

export default AppContainer;

const styles = StyleSheet.create({
	container: {},
});
