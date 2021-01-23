import React, {Component} from 'react';
import { View, Image, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';

export default class StarRating extends Component {
	constructor(props){
		super(props);
	}

	renderRatingNumber(){
		let renderedNumber = [],
			size = styles.numberSize_M;

		if(this.props.resizeNumber){
			switch(this.props.size){
				case 'l': size = styles.numberSize_L;break;
				case 's': size = styles.numberSize_S;break;
			}
		}

		if(typeof this.props.rating !== 'undefined' && !this.props.hideNumber){
			renderedNumber.push(<Text style={[styles.rating, size]}>{this.props.rating}</Text>);
		}

		return renderedNumber;
	}

	renderStars(){
		let renderedStars = [],
			starsCount = (this.props.count) ? this.props.count : 5;
			fullStarsCount = Math.floor(this.props.rating),
			hasHalf = (this.props.rating - fullStarsCount) >= 0.5,
			fileName = '',
			size = null;

		switch(this.props.size){
			case 'l': size = styles.starSize_L;break;
			case 's': size = styles.starSize_S;break;
			default: size = styles.starSize_M; 
		}

		for(let i = 0; i < starsCount; i++){
			const allStyles = [
					EStyleSheet.child(styles, 'star', i, starsCount),
					size
			],
			emptyStar = require('./images/empty-star.png');

			let fullStar = 'undefined',
				halfStar = 'undefined';

			switch(this.props.theme){
				case 'gray':
					fullStar = require('./images/themes/gray/full-star.png');
					halfStar = require('./images/themes/gray/half-star.png');
					break;
				default: 
					fullStar = require('./images/themes/yellow/full-star.png');
					halfStar = require('./images/themes/yellow/half-star.png');
			}

			if(i < fullStarsCount ){
				renderedStars.push(
					<Image source={fullStar} style={allStyles}/>
				);
			} else if(i == fullStarsCount && hasHalf){
				renderedStars.push(
					<Image source={halfStar} style={allStyles}/>
				);
			} else {
				renderedStars.push(
					<Image source={emptyStar} style={allStyles}/>
				);
			}
		}

		return renderedStars;
	}

	render(){
		return (
			<View style={styles.starRatingContainer}>
				{this.renderRatingNumber()}
				<View style={styles.starsContainer}>{this.renderStars()}</View>
			</View>
		);
	}
}