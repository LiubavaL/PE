import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ScrollView, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Tabs extends Component {
	constructor(props){
		super(props);

		this.state = {
			active: 1,
			screenWidth: Dimensions.get('window').width,
		};
		this.handleTabClick = this.handleTabClick.bind(this);
	}

	handleTabClick(index){
		console.log('handleTabClick = ', index);
		this.setState({
			active: index
		});
	}

	render({children} = this.props){
		return (
			<View>
				<View style={{marginHorizontal: 15}}>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						{children.map(({props: {title}}, index) => 
							<TouchableOpacity
								style={{width: this.state.screenWidth * 0.5 - 25, marginHorizontal: 5}}
								onPress={() => this.handleTabClick(index)}>
								<View style={[{
									alignItems: 'center',
									height: 25,
									fontFamily: 'Oxygen-Bold',
									fontSize: 14,
									borderColor: '#E4E4E4',
									borderWidth: 3,
									borderTopWidth: 0,
									borderLeftWidth: 0,
									borderRightWidth: 0,

								},
								(index == this.state.active) ? {borderColor: '#2572CC'} : []
								]}>
									<Text style={
										(index == this.state.active) ? {color: '#2572CC'} : {color: '#2F2F2F'}
									}>
										{title}
									</Text>
								</View>
							</TouchableOpacity>
						)}
					</ScrollView>
				</View>
				{children[this.state.active]}
			</View>
		);
	}
}