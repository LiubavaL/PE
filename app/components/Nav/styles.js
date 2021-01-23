import EStyleSheet from 'react-native-extended-stylesheet';

const NAV_BASE_COLOR = '#FFEFB7';
const NAV_ACTIVE_COLOR = '#FFF8DE';

export default EStyleSheet.create({
	triangle: {
		width: 0,
		height: 0,
		backgroundColor: 'transparent',
		borderStyle: 'solid',
		borderLeftWidth: 22,
		borderRightWidth: 22, 
		borderBottomWidth: 20,
	}, 
	navBar: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center', 
		alignItems: 'center',
	},
	navBarItem: {
		backgroundColor: NAV_BASE_COLOR,
		fontSize: 18,
		padding: 10,
		paddingLeft: 15,
	}, 
	navBarSeparator:{
		borderBottomColor: NAV_BASE_COLOR,
		borderLeftColor: NAV_ACTIVE_COLOR,
		borderRightColor: NAV_ACTIVE_COLOR,
		transform: [
			{rotate: '90deg'}
		],
		position: 'relative',
		bottom: 0, 
		right: 12,
		marginRight: -24,
	},
	navBarItemCurrent:{
		flex: 1,
		backgroundColor: NAV_ACTIVE_COLOR,
	} 
});