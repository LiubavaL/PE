import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import styles from './styles';

const Container = ({children}) => {
	return (
		<ScrollView>
			<View style={styles.container}>
				{children}
			</View>
		</ScrollView>
	)
}

Container.propTypes = {
	children: PropTypes.element
};

export default Container;