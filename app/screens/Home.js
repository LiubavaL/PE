import { Container } from '../components/Container';
import { InputWithButton } from '../components/TextInput';
import { IconButton } from '../components/Button';
import React, { Component } from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class Home extends Component {
	handleSearch(){
		console.log('handle search');
	}

	render() {
		return (
			<Container>
				<View style={{marginHorizontal: 20}}>
					<InputWithButton>
						<View style={styles.searchButtonWrapper}>
							<IconButton onPress={this.handleSearch} icon="search"/>
						</View>
					</InputWithButton> 
				</View>
			</Container>
		)
	}
}

const styles = EStyleSheet.create({
	searchButtonWrapper: {
		position: 'absolute',
		right: 10,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default Home;