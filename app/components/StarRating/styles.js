import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	starRatingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	starsContainer: {
		flexDirection: 'row',
		marginLeft: 5
	},
	star: {
		marginRight: 4
	},
	'star:last-child': {
		marginRight: 0
	},
	rating: {
		fontFamily: 'Roboto-Bold',
		color: '#686868',
	},

	/* Sizes */
	starSize_L: {
		width: 20,
		height: 20,
	},
	starSize_M: {
		width: 15,
		height: 15,
	},
	starSize_S: {
		width: 9,
		height: 9,
	},

	numberSize_L: {
		fontSize: 28
	},
	numberSize_M: {
		fontSize: 23
	},
	numberSize_S: {
		fontSize: 14
	}
});