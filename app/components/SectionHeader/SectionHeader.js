import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Button } from '../Button';

export default class SectionHeader extends Component {
	handleButtonPress(){
		console.log('handleButtonPress');
	}

	renderButton(){
		let renderedButton = [];

		if(this.props.buttonTitle){
			renderedButton.push(
				<Button onPress={this.handleButtonPress} title={this.props.buttonTitle.toUpperCase()} theme='darkGray'/>  
				);
		}
		return renderedButton;
	}

	renderLabel(){
		let renderedLabel = [];

		if(this.props.labelTitle){
			renderedLabel.push(
				<Text style={[{fontFamily: 'Roboto-Bold', fontSize: 14}, styles.titleThemeBlack]}>{this.props.labelTitle.toUpperCase()}</Text>
			);
		}

		return renderedLabel;
	}

	render(){
		return (
			<View style={{flexDirection: 'row', justifyContent: 'space-between',  alignItems: 'center', paddingTop: 22, paddingBottom: 12, paddingHorizontal: 15}}>
				{this.renderLabel()}
				{this.renderButton()}
			</View>
		);
	}
}