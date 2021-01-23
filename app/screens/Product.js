import React, { Component } from 'react';
import {
	Text, 
	View, 
	FlatList, 
	Image, 
	Dimensions,
	TouchableOpacity, 
	TouchableWithoutFeedback, 
	TouchableHighlight, 
	Modal, 
	ScrollView
} from 'react-native';
import { Font, MapView } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Container } from '../components/Container';
import { StarRating } from '../components/StarRating';
import { Nav } from '../components/Nav';   
import { Logo } from '../components/Logo';   
import { Tabs } from '../components/Tabs';   
import { Block } from '../components/Block';   
import { CustomMap } from '../components/CustomMap';   
import { SectionHeader } from '../components/SectionHeader';   
import countriesFlags from '../data/countryFlags';
import { Button } from '../components/Button';
import { Review } from '../components/Review';
import { StarRatingDetails } from '../components/StarRatingDetails';

export default class Product extends Component {
	constructor(props){
		super(props);
		this.state = {
			productData: {
				covers: [
					{cover: 'https://img2.zakaz.ua/zakaz-HP-630-Notebook-PC.1367236589.ad72436478c_2013-05-08/zakaz-HP-630-Notebook-PC.1367236589.SNB4C4B9.obj.0.9.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg'},
					{cover: 'https://img3.zakaz.ua/white-1001PXD.1336320309.84269c41@120409_2012-05-10/white-1001PXD.1336320309.SNDDE581.obj.0.9.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg'},
					{cover: 'https://img2.zakaz.ua/white-1001PXD.1336320309.84269c41@120409_2012-05-10/white-1001PXD.1336320309.SNB4C4B9.obj.0.11.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg'}
				],
				logo: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112010/president_cmyk.png",
				price: 12.03,
				volume: 900, // in ml
				weight: null,  
				category: 'Milk',
				subcategory: 'Regular milk',
				updatedAt: '17.05.2018 20:12',
				name: 'Плавленый сыр с грибами и зеленъю',
				mark: 'President',
				manufacturer: 'Савушкин продукт',
				countryCode: 'BY',
				description: 'Сыр плавленый с грибами ломтевой президент в вакумной упаковкe. Сыр Бри (Brie) — этот мягкий сыр по праву можно назвать  королевским и самым знаменитым сортом французских сыров. Сыр готовят вручную из непастеризованного молока, он покрыт корочкой белого цвета, имеющую бархатистую плесневую поверхность, под который скрывается нежная текучая масса кремового цвета. Сыр бри может быть молодым и зрелым. На вкус бри просто бесподобен — яркий и деликатный с едва заметным привкусом лесных орехов. Молодой сыр имеет более мягкий сливочный вкус и толщину лепёшки около 5 см. А вот зрелый бри более плотный, с более тонкой лепешкой и на вкус довольно острый и пикантный. Вкус сыра более полно раскроется, когда он согреется до комнатной температуры. Бри прекрасно сочетается с красными и белыми виноградными и фруктовыми винами, его можно добавлять в различные салаты, супы и прочие блюда. Везде он проявит свой непревзойдённый вкус. Зелёные яблоки, клубника или дыня, апельсиново-имбирный конфитюр  органично дополнят бри, мягко оттенив все нюансы его богатейшего вкуса.',
				shortDescription: 'Сыр плавленый с грибами ломтевой президент в вакумной упаковкe Сыр Бри (Brie) ...'
			},
			basicInfo: [
				{title: 'wight', value: '150g'},
				{title: 'fatness', value: '40%'},
				{title: 'taste', value: 'mushrooms'},
				{title: 'quantity', value: '1'},
			],
			similarProducts: [ 
				{
					name: 'Сыр с луком',
					logo: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112010/president_cmyk.png",
					volume: 900,
					manufacturer: 'Савушкин продукт',
				},
				{
					name: 'Сыр с луком',
					logo: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112010/president_cmyk.png",
					volume: 240,
					manufacturer: 'President',
				},
				{
					name: 'Сыр с овощами',
					logo: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112010/president_cmyk.png",
					volume: 50,
					manufacturer: 'Савушкин продукт',
				},
			],
			shops: [
				{
					name: 'Biggz',
					logo: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112010/president_cmyk.png",
					distance: 150, //metres
					updatedAt: 'today', //10:15:00 25.02.2018
				},
				{
					name: 'Korona',
					logo: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112010/president_cmyk.png",
					distance: 300, //metres
					updatedAt: 'today', //10:15:00 25.02.2018
				},
				{
					name: 'Rublevski',
					logo: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112010/president_cmyk.png",
					distance: 900, //metres
					updatedAt: 'today', //10:15:00 25.02.2018
				},
				{
					name: 'Sosedi',
					logo: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112010/president_cmyk.png",
					distance: 990, //metres
					updatedAt: 'yesterday', //10:15:00 25.02.2018
				},
				{
					name: 'Evroopt',
					logo: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112010/president_cmyk.png",
					distance: 990, //metres
					updatedAt: 'yesterday', //10:15:00 25.02.2018
				},
			],
			recommendedProducts: [
				{
					name: 'Friendship cheese',
					image: 'https://img2.zakaz.ua/zakaz-HP-630-Notebook-PC.1367236589.ad72436478c_2013-05-08/zakaz-HP-630-Notebook-PC.1367236589.SNB4C4B9.obj.0.9.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg',
					logo: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112010/president_cmyk.png',
					weight: 150, //grams
					price: 1.29,
					shopsCount: 5,
				},
				{
					name: 'Camembert',
					image: 'https://img2.zakaz.ua/zakaz-HP-630-Notebook-PC.1367236589.ad72436478c_2013-05-08/zakaz-HP-630-Notebook-PC.1367236589.SNB4C4B9.obj.0.9.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg',
					logo: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112010/president_cmyk.png',
					weight: 340, //grams
					price: 5.29,
					shopsCount: 5,
				},
				{
					name: 'Friendship cheese',
					image: 'https://img2.zakaz.ua/zakaz-HP-630-Notebook-PC.1367236589.ad72436478c_2013-05-08/zakaz-HP-630-Notebook-PC.1367236589.SNB4C4B9.obj.0.9.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg',
					logo: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112010/president_cmyk.png',
					weight: 150, //grams
					price: 4.00, 
					shopsCount: 5,
				},
				{
					name: 'Friendship cheese',
					image: 'https://img2.zakaz.ua/zakaz-HP-630-Notebook-PC.1367236589.ad72436478c_2013-05-08/zakaz-HP-630-Notebook-PC.1367236589.SNB4C4B9.obj.0.9.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg',
					logo: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/112010/president_cmyk.png',
					weight: 400, //grams
					price: 1.29,
					shopsCount: 5,
				},
			],
			reviews: [
				{
					'title': 'Для бутеров ок',
					'date': '15 oct 2018',
					'author': 'John K',
					'avatar': require('../../assets/images/user4.jpg'),
					'rating': 5.0,
					'content': 'Отличный бутер получается с сырком) вкусно) Упаковка прекрасно открывается одной рукой',
					'agreed': 25,
					'disagreed': 0,
					'replies': []
				},
				{
					'title': 'Like it aso',
					'date': '12 oct 2018',
					'author': 'Nill Clinton',
					'avatar': require('../../assets/images/user3.jpeg'),
					'rating': 3.5,
					'content': 'Сыр как и весь "президент", недоделан справа мы сравнили число инвесторов, с которыми удалось выйти на контакт',
					'agreed': 24,
					'disagreed': 0,
					'replies': []
				},
				{
					'title': 'отстой',
					'date': '1 sep 2018',
					'author': 'Jane Esligher',
					'avatar': require('../../assets/images/user2.jpeg'),
					'rating': 2.0,
					'content': 'не понравилась консистенция',
					'agreed': 20,
					'disagreed': 2,
					'replies': []
				}
			],
			activities:[
				{
					shopName: 'Bigzz',
					logo: '../../assets/logos/bigzz.jpg',
					distance: 50,
					address: 'Marksa str, 34',
					rating: 3.5
				},
				{
					shopName: 'Korona',
					logo: '../../assets/logos/korona.jpg',
					distance: 306,
					address: 'Kirova str, 5',
					rating: 2.5
				},
				{
					shopName: 'Sosedi',
					logo: '../../assets/logos/sosedi.jpg',
					distance: 714,
					address: 'Nezavisimosti prosp, 114a',
					rating: 4.5
				},
			],
			screenWidth: Dimensions.get('window').width,
			fontLoaded: false,
			coverModalVisible: false
		}
	}

	//Modal
	_renderItem = ({item}) => (
		<View style={[ styles.sliderItemContainer, { width: this.state.screenWidth }]}>
			<TouchableWithoutFeedback onPress={() => {this._setSliderModalVisible(true)}}>
				<Image 
					style={{width: this.state.screenWidth, height: 300}}
					source={{uri: item.cover}}
				/>
			</TouchableWithoutFeedback>
		</View>
	);
	//similar product
	_renderSimilarProductBlock = ({item}) => (
		<Block styles={{width: 138, marginRight: 10}}>
			<Image style={{width: 138, height: 75}} source={{uri: 'https://img2.zakaz.ua/zakaz-HP-630-Notebook-PC.1367236589.ad72436478c_2013-05-08/zakaz-HP-630-Notebook-PC.1367236589.SNB4C4B9.obj.0.9.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg'}}/>
			<View>
				<View style={{flexDirection: 'row'}}>
					<View style={{width: '75%'}}><Text style={{color: '#3A3A3A', fontFamily: 'Roboto-Light', fontSize: 14}}>{item.name}</Text></View>
					<View style={{position: 'relative', bottom: 15}}>								
						<Logo url={item.logo} styles={{width: 32, height: 32}}/>
					</View>
				</View>
				<Text style={[styles.manufacturer, styles.manufacturerS]}>{item.manufacturer}</Text>
			</View>
			<View style={styles.manufacturerContainer}>
				<Text style={[styles.volumeInfo, styles.volumeInfoS]}>{item.volume} ml</Text>
				<View style={styles.priceContainer}>  
		        	<Text style={[styles.price, styles.priceIntSizeS]}>12</Text> 
		        	<Text style={[styles.price, styles.priceDecimal, styles.priceDecSizeS]}>09</Text>
	        	</View>
			</View>
		</Block> 
	);

	//shops with requested product
	_renderShopBlock = ({item}) => (
		<Block styles={{width: 80, marginRight: 15, padding: 8}}>
			<Logo url={item.logo} styles={{width: 64, height: 64}}/>
			<Text style={{color: '#3A3A3A', fontSize: 14, fontFamily: 'Roboto-Medium'}}>{item.name}</Text>
			<Text style={{color: '#555555', fontSize: 14, fontFamily: 'Roboto'}}>{item.distance} m</Text>
			<Text style={{color: '#1D1D1D', fontSize: 18, fontFamily: 'Roboto-BoldItalic'}}>{item.price}</Text>
			<Text style={{color: '#969696', fontSize: 12, fontFamily: 'Roboto'}}>{item.updatedAt}</Text>
		</Block>
	);

	//recommended products
	_renderRecommendedProducts = ({item}) => (
		<Block styles={{width: 140, marginRight: 10}}>
			<Image style={{width: 140, height: 68}} source={{uri: item.image}}/>
			<View style={{alignSelf: 'flex-end', position: 'relative', bottom: 15, marginBottom: -17}}>								
				<Logo url={item.logo} styles={{width: 32, height: 32}}/>
			</View>
			<Text style={[{fontFamily: 'Roboto-Medium', fontSize: 14}, styles.titleThemeBlack]}>{item.name}</Text>
			<View style={{marginBottom: 5}}>	
				<Text style={{color: '#969696', fontSize: 12, fontFamily: 'Roboto'}}>{item.weight}</Text>
			</View>
			<Text style={{color: '#1D1D1D', fontSize: 18, fontFamily: 'Roboto-BoldItalic'}}>{item.price}</Text>
			<View style={{marginTop: -3}}>			
				<Text style={{color: '#969696', fontSize: 12, fontFamily: 'Roboto'}}>in {item.shopsCount} shops in Minsk</Text>
			</View>
		</Block> 
	);

	_basicInfoItem = ({item}) => (
		<Block styles={{width: 100, padding: 8, marginRight: 5}}>
			<Text style={{fontSize: 25, color: 'rgb(63, 63, 63)', fontFamily: 'Roboto-Bold'}}>{item.value}</Text>
			<Text style={{fontSize: 13, color: 'rgb(102, 102, 102)', fontFamily: 'Roboto'}}>{item.title}</Text>
		</Block>
	);

	_setSliderModalVisible(visible){
		this.setState({
			coverModalVisible: visible
		});
	}

	renderReviews(){
		let renderedReviews = [],
			reviews = this.state.reviews;

		for(let i = 0; i < reviews.length; i++){
			renderedReviews.push(
				<View style={{marginTop: 15}}>
					<View style={{marginBottom: 20}}>
						<Review 
							title={reviews[i].title} 
							author={reviews[i].author} 
							date={reviews[i].date}
							avatar={reviews[i].avatar}
							rating={reviews[i].rating}					
							content={reviews[i].content}
							agreed={reviews[i].agreed}
							disagreed={reviews[i].disagreed}
							replies={reviews[i].replies.length}
						/>
					</View>
				</View>
			);
		}

		return renderedReviews;
	}

	renderActivities(){
		let renderedActivities = [], 
			activities = this.state.activities;

		for(let i = 0; i < activities.length; i++){
			renderedActivities.push(
				<View style={{marginTop: 15}}>
					<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
						<View style={{flexDirection: 'row'}}>
							<View style={{marginRight: 5}}>
								<Logo src={require('../../assets/logos/bigzz.jpg')} styles={{width: 50, height: 50}} />
							</View>
							<View>
								<Text>{activities[i].shopName}</Text>
								<StarRating rating={activities[i].rating} theme='gray' size='s' resizeNumber/>
							</View>
						</View>
						<View>
							<View  style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
								<Text style={{fontFamily: 'Roboto-Bold', fontSize: 16, marginRight: 3}}>{activities[i].distance}</Text>
								<Text style={{color: '#9E9E9E', fontFamily: 'Roboto', fontSize: 14}}>m</Text>
							</View>
							<Text style={{fontFamily: 'Roboto-Light', fontSize: 14, color: '#9E9E9E'}}>{activities[i].address}</Text>
						</View>
					</View>
				</View>
			);
		}

		return renderedActivities;
	}
	
	async componentDidMount(){
		await Font.loadAsync({
			Roboto: require('../../assets/fonts/Roboto/Roboto-Regular.ttf'),
			'Roboto-Bold': require('../../assets/fonts/Roboto/Roboto-Bold.ttf'), 
			'Roboto-Medium': require('../../assets/fonts/Roboto/Roboto-Medium.ttf'),
			'Roboto-Light': require('../../assets/fonts/Roboto/Roboto-Light.ttf'),
			'Roboto-BoldItalic': require('../../assets/fonts/Roboto/Roboto-BoldItalic.ttf'),
			'Oxygen': require('../../assets/fonts/Oxygen/Oxygen-Regular.ttf'),
			'Oxygen-Bold': require('../../assets/fonts/Oxygen/Oxygen-Bold.ttf'),
		});

		this.setState({
			fontLoaded: true
		});
	}

	handlePress(){
		console.log('handlePress event fired!');
	}

	render(){
		if(this.state.fontLoaded){
			return ( 
				<Container>
					<Modal 
			    		animationType="fade"  
			    		transparent={false}
			    		onRequestClose={() => {
	    					console.log('alert closed');
	    				}}
			    		visible={this.state.coverModalVisible}
			    		>
		    			<View style={styles.sliderContainer}> 
		    				{/* replace to CloseButton component  */}
		    				<TouchableHighlight onPress={() => { 
		    					this._setSliderModalVisible(false); 
		    				}}>
		    					<Text style={styles.sliderCloseButton}>X</Text>
		    				</TouchableHighlight>

			    			<FlatList
			    				contentContainerStyle={{marginTop: 30 + '%'}} 
						        data={this.state.productData.covers}
						        renderItem={this._renderItem}
						        horizontal={true}
						        pagingEnabled={true}
						        showsHorizontalScrollIndicator={false}
					        />
				        </View> 
					</Modal>

					<Nav items={{'category': this.state.productData.category, 'subcategory': this.state.productData.subcategory}}/>
					<View style={styles.header}>
						<View style={styles.manufacturerContainer}>
							<Text style={[styles.manufacturer, styles.manufacturerL]}>{this.state.productData.manufacturer}</Text>
							<Image source={{uri: countriesFlags.BY}} style={styles.countryFlagStyle} />
						</View> 							
						<Text style={styles.name}>{this.state.productData.name}</Text>
					</View>

					<View style={styles.slider}>
						<FlatList 
							data={this.state.productData.covers}
							renderItem={this._renderItem}
							horizontal={true}
							pagingEnabled={true}
							showsHorizontalScrollIndicator={false}
						/>
					</View>

					<View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-around'}}>
						<View style={{flexDirection: 'row'}}>
							{/* Logo */}
							<View style={styles.logoContainer__wrapper}>
								<Logo url={this.state.productData.logo} styles={{width: 94, height: 94}}/>					
							</View>  

							<View style={{flexDirection: 'column', 'marginLeft': 5}}>
								{/* Rating */}
								<StarRating rating={3.6}/>
								{/* Date */}
								<Text style={styles.lastUpdate}>{this.state.productData.updatedAt}</Text>
							</View>						
						</View> 

						<View style={{alignItems: 'flex-end'}}>
							{/* Price */}
							<View style={styles.priceContainer}>
					        	<Text style={[styles.price, styles.priceIntSizeL]}>12</Text> 
					        	<Text style={[styles.price, styles.priceDecimal, styles.priceDecSizeL]}>09</Text>
				        	</View>
				        	<Text style={[styles.volumeInfo, styles.volumeInfoL]}>1 x {this.state.productData.volume} ml</Text>
						</View>
					</View>

					<View style={{marginTop: 10}}>
						<Tabs>
							{/*First tab*/}
							<View title="SIMILAR">
								<View style={{backgroundColor: '#EFEFEF', paddingTop: 10, paddingBottom: 8}}>
									<FlatList
										data={this.state.similarProducts}
										renderItem={this._renderSimilarProductBlock}
										horizontal={true}/>
								</View>
								<SectionHeader labelTitle='YOU CAN BUY IT HERE' buttonTitle='ALL SHOPS' />
								<View style={{marginBottom: 10}}>
									<CustomMap styles={{
										width: this.state.screenWidth,
										height: 215
									}}
									/>
								</View>
								<FlatList
									data={this.state.shops}
									renderItem={this._renderShopBlock}
									horizontal={true}/>

								<SectionHeader labelTitle='RECOMMENDED TO YOU' buttonTitle='SEE ALL' />
								<FlatList 
									data={this.state.recommendedProducts}
									renderItem={this._renderRecommendedProducts} 
									horizontal={true}/>
							</View>
							{/*Second tab*/}
							<View title="INFO">
								<View style={{marginHorizontal: 15, marginTop: 15}}>
									<Text style={{fontSize: 16, color: 'rgb(145, 145, 145)', fontFamily: 'Roboto'}}>{this.state.productData.shortDescription}</Text>
						        	<View style={{alignSelf: 'flex-end' }}>  
							        	<Text style={{fontSize: 16, color: 'rgb(63, 63, 63)', fontFamily: 'Roboto-Medium'}}>Read more</Text>  
							        </View>
							    </View>
							    <View style={{marginLeft: 15, marginBottom: 15}}>
								    <Text style={{fontSize: 14, color: 'rgb(63, 63, 63)', fontFamily: 'Roboto-Bold', marginBottom: 15}}>BASIC INFO</Text>
							        <FlatList
							        	data={this.state.basicInfo}
							        	renderItem={this._basicInfoItem}   
							        	horizontal={true}
							        	showsHorizontalScrollIndicator={false}
							        />
								</View>
								<View style={{flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 15}}>
									<Button onPress={this.handlePress} styles={{width: '46%'}} title='Nutrion Facts' theme='light' rounded='true'/>
									<Button onPress={this.handlePress}  styles={{width: '46%'}} title='Info' theme='light' rounded='true'/>
								</View>
								<SectionHeader labelTitle='Ratings' buttonTitle='Rate now' />
								<StarRatingDetails rating={3.6} size='l'/>
								<SectionHeader labelTitle='Reviews' buttonTitle='Read All' />
								<View style={{marginHorizontal: 15, marginTop: 15}}>
									{this.renderReviews()}
								</View>
								<SectionHeader labelTitle='my activities' buttonTitle='history' />
								<View style={{marginHorizontal: 15}}>
									{this.renderActivities()}
								</View>
							</View>
						</Tabs>
					</View>
				</Container>
			);
		}
		return null;
	}
}



const styles = EStyleSheet.create({
	header: {
		paddingHorizontal: '$baseMargin',
		paddingVertical: 10,
	},
	name: {
		fontSize: 25,
		color: '#393939',
		fontFamily: 'Roboto-Bold'
	},
	manufacturerContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	manufacturer: {
		fontFamily: 'Roboto'
	},
	manufacturerL: {
		fontSize: 16, 
		color: '#707070',
	},
	manufacturerS: {
		fontSize: 12, 
		color: '#969696',
	},
	countryFlagStyle: {
		width: 29,
		height: 18,
		borderWidth: 1,
	    borderRadius: 2, 
	    borderColor: '#aaa', 
	    borderTopWidth: 0,
	    shadowColor: '#000',
	    shadowOffset: { width: 0, height: 10 },
	    shadowOpacity: 0.8,
	    shadowRadius: 2,
	    elevation: 1,
	},

	sliderContainer: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'flex-end', 
		backgroundColor: "rgba(0,0,0,0.6)"
	},
	slider: {
		height: 300,
	},
	sliderItemContainer: {
		flex: 1, 
		alignItems: 'center', 
		height: 300, 
		backgroundColor: '#eee',
	},
	sliderCloseButton: {
		fontSize: 34, 
		color: "#fff", 
		marginRight: 5, 
		marginTop: 5
	},

	product__baseInfo: {	
		flexDirection: 'row', 
		alignItems: 'flex-start', 
		justifyContent: 'space-around',
		marginTop: 20,
	},
	logoContainer__wrapper: {
		position: 'relative', 
		bottom: 50,
		alignItems: 'flex-start'
	},
	volumeInfo: {
		fontSize: 12
	},
	volumeInfoL: {
		color: '#ADADAD', 
		fontFamily: 'Oxygen', 
	},
	volumeInfoS: {
		color: '#ABABAB', 
		fontFamily: 'Roboto', 
	},

	lastUpdate: {
		fontSize: 14,
		fontFamily: 'Roboto',
		color: '#C6C6C6'
	},

	priceContainer: {
		flexDirection: 'row',
	},
	price: {
		fontFamily: 'Roboto-Bold'
	},
	priceDecimal: {
		marginLeft: 2, 
	},
	priceIntSizeS: {
		fontSize: 22
	},
	priceIntSizeL: {
		fontSize: 55 
	},
	priceDecSizeS: {
		fontSize: 12
	},
	priceDecSizeL: {
		fontSize: 20 
	},
});