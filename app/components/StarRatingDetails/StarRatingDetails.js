import React, {Component} from 'react';
import { View, Image, Text } from 'react-native';
import { StarRating } from '../StarRating';
import styles from './styles';
import { max } from '../../helpers/functions';

export default class StarRatingDetails extends Component {
	starsCount = this.props.count ? this.props.count : 5;
	rates = {
		'1': 1,
		'2': 3,
		'3': 7,
		'5': 56
	};

	getRatesCount(){
		let count = 0;

		for(let key in this.rates){
			let value = this.rates[key];

			count += value;
		}

		return count;
	}

	renderDetails(){
		let renderedDetails = [],
			max = 56;

		for(let i = this.starsCount; i > 0; i--){
			let count = (typeof this.rates[i] !== 'undefined' ? this.rates[i] : 0),
				width = (count * 100) / max;

			renderedDetails.push(
				<View style={{flexDirection: 'row', marginHorizontal: 15}}>
					<View style={{flexDirection: 'column', justifyContent: 'center', width: '25%'}}>
						<StarRating size='s' count={i}/>
					</View>
					<View style={{flexDirection: 'column',  justifyContent: 'center',  width: '8%'}}>
						<Text style={{color: '#B6B6B6', fontSize: 11, fontFamily: 'Roboto'}}>{count}</Text>
					</View>
					<View style={{flexDirection: 'column',  justifyContent: 'center', width: '67%'}}>
						<View style={{width: width + '%', height: 4, backgroundColor: '#E5E5E5'}}></View>
					</View>
				</View>
			);
		}

		return renderedDetails;
	}

	render(){
		return(
			<View>
				<View style={styles.header}>
					<StarRating rating={3.6} size='l'/>
					<Text style={styles.ratesCount}>
						{this.getRatesCount()} RATES
					</Text>
				</View>
				{this.renderDetails()}
			</View>
		)
	}
}