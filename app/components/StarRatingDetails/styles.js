import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: '$baseMargin'
	},
	ratesCount: {
		fontFamily: 'Roboto-Bold',
		color: '#868686',
		fontSize: 12
	}
});