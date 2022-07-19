import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Button from '../../../ui-system/inputs/button/button';

const windowWidth = Dimensions.get('window').width;

interface IOnboardingCarouselProps {
  data: Array<{title: string; description: string}>;
  onFinish: () => void;
  width?: number;
}

const OnboardingCarousel = ({
  data,
  width = windowWidth,
  onFinish,
}: IOnboardingCarouselProps) => {
  const sliderRef = useRef();
  const [slider1ActiveSlide, setActiveSlide] = useState(0);

  const onPressNext = useCallback(() => {
    const nextIndex = slider1ActiveSlide + 1;

    if (nextIndex < data.length) {
      return sliderRef?.current?.snapToNext();
    }
    onFinish();
  }, [slider1ActiveSlide, data, onFinish]);

  useFocusEffect(
    useCallback(() => {
      sliderRef?.current?.snapToItem(0, true);
    }, []),
  );

  return (
    <View>
      <Carousel
        ref={sliderRef}
        data={data}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={setActiveSlide}
        contentContainerCustomStyle={styles.carousel}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={slider1ActiveSlide}
        dotColor={'#6366f1'}
        dotContainerStyle={styles.pagination}
        inactiveDotColor={'#d9d9d9'}
        inactiveDotScale={1}
        carouselRef={sliderRef}
      />
      <View style={styles.footerContainer}>
        <Button variant="text" color="white" onPress={onFinish}>
          Ignore
        </Button>
        <Button onPress={onPressNext}>Suivant</Button>
      </View>
    </View>
  );
};

const _renderItem = ({item}: {item: IOnboardingCarouselProps['data'][0]}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 19,
    lineHeight: 28,
    fontFamily: 'Inter',
    color: '#1e3a8a',
    marginBottom: 15,
  },
  description: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Red Hat Display',
    color: '#595c68',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginBottom: 20,
  },
  pagination: {
    marginHorizontal: 2,
  },
  carousel: {
    alignSelf: 'flex-end',
  },
});

export default OnboardingCarousel;
