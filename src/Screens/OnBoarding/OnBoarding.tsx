import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Image,
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OnBoardingStyle from './style/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Screen_Size } from '../../components/DesigneTokens/metrics';


const slides = [
    {
        id: 1,
        title: 'Monitore sua energia em tempo real',
        description: 'Acompanhe o consumo e a geração de energia da sua casa de forma simples e visual, com gráficos claros e atualizados constantemente.',
        image: require('../../../assets/slide1.gif'),
    },
    {
        id: 2,
        title: 'Simule geração fotovoltaica',
        description: 'Descubra quanto você pode economizar com energia solar. Simule a geração de painéis fotovoltaicos e compare com seu consumo atual.',
        image: require('../../../assets/slide3.gif'),
    },
    {
        id: 3,
        title: 'Tome decisões inteligentes',
        description: 'Receba relatórios detalhados e comparativos para decidir quando investir em energia solar e otimizar seu consumo energético.',
        image: require('../../../assets/slide2.gif'),
    },
];

export default function OnBoarding() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const navigation = useNavigation();

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const slideIndex = Math.round(event.nativeEvent.contentOffset.x / Screen_Size.width);
        setCurrentSlide(slideIndex);
    };

    const handleNext = () => {
        if (currentSlide < slides.length - 1) {
            flatListRef.current?.scrollToIndex({
                index: currentSlide + 1,
                animated: true,
            });
        } else {
            completeOnBoarding();
        }
    };

    const handleBack = () => {
        if (currentSlide > 0) {
            flatListRef.current?.scrollToIndex({
                index: currentSlide - 1,
                animated: true,
            });
        }
    };

    const handleSkip = async () => {
        completeOnBoarding();
    };

    const completeOnBoarding = async () => {
        try {
            await AsyncStorage.setItem('@geesh_onboarding_completed', 'true');
            //   navigation.replace('Login');
        } catch (error) {
            console.error('Erro ao salvar onboarding:', error);
        }
    };

    const isLastSlide = currentSlide === slides.length - 1;

    const renderSlide = ({ item }: { item: typeof slides[0] }) => (
        <View style={OnBoardingStyle.slide}>
            <View style={OnBoardingStyle.imageContainer}>
                <Image source={item.image} style={OnBoardingStyle.image} resizeMode="contain" />
            </View>

            <View style={OnBoardingStyle.contentContainer}>
                <Text style={OnBoardingStyle.title}>{item.title}</Text>
                <Text style={OnBoardingStyle.description}>{item.description}</Text>
            </View>
        </View>
    );

    return (
        <View style={OnBoardingStyle.body}>
            <View style={OnBoardingStyle.container}>

                {!isLastSlide && (
                    <TouchableOpacity style={OnBoardingStyle.skipButton} onPress={handleSkip}>
                        <Text style={OnBoardingStyle.skipText}>Pular</Text>
                    </TouchableOpacity>
                )}

                <FlatList
                    ref={flatListRef}
                    data={slides}
                    renderItem={renderSlide}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                    keyExtractor={(item) => item.id.toString()}
                />

                <View style={OnBoardingStyle.slideControll}>
                    <View style={OnBoardingStyle.indicatorContainer}>
                        {slides.map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    OnBoardingStyle.indicator,
                                    currentSlide === index && OnBoardingStyle.indicatorActive,
                                ]}
                            />
                        ))}
                    </View>
                    <View style={OnBoardingStyle.buttonsContainer}>
                        {currentSlide > 0 && (
                            <TouchableOpacity style={OnBoardingStyle.backButton} onPress={handleBack}>
                                <Text style={OnBoardingStyle.backText}>Anterior</Text>
                            </TouchableOpacity>
                        )}

                        <TouchableOpacity
                            style={[
                                OnBoardingStyle.nextButton,
                                currentSlide === 0 && OnBoardingStyle.nextButtonFull,
                            ]}
                            onPress={handleNext}
                        >
                            <Text style={OnBoardingStyle.nextText}>
                                {isLastSlide ? 'Começar' : 'Próximo'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

