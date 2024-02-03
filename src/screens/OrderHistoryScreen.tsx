import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/Details Scerren/EmptyListAnimation';
import PopUpAnimation from '../components/PopUpAnimation';

import {useStore} from '../store/store';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {adaptive} from '../utils/adaptive';
import OrderHistoryCard from '../components/Order History List/OrderHistoryCard';

type Nav = {
  navigate: (value: string, {}) => void;
};

interface IOrderHistoryScreen {
  navigation: Nav;
}

const OrderHistoryScreen: React.FC<IOrderHistoryScreen> = ({navigation}) => {
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  const orderHistoryList = useStore(state => state.OrderHistoryList);
  const tabBarHeight = useBottomTabBarHeight();

  const navigationHandler = ({
    index,
    id,
    type,
  }: {
    index: number;
    id: string;
    type: string;
  }) => {
    navigation.navigate('DetailsScreen', {index, id, type});
  };

  const buttonPressHandler = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {showAnimation && (
        <PopUpAnimation
          style={styles.lottieAnimation}
          source={require('../lottie/download.json')}
        />
      )}
      <ScrollView
        contentContainerStyle={[
          styles.scrollView,
          {marginBottom: tabBarHeight},
        ]}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.innerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.itemContainer}>
            <HeaderBar title="Cart" />
            {orderHistoryList.length == 0 ? (
              <EmptyListAnimation title="No Order History" />
            ) : (
              <View style={styles.listItemContainer}>
                {orderHistoryList.map((item, index) => (
                  <OrderHistoryCard
                    key={index}
                    CartList={item.CartList}
                    navigationHandler={navigationHandler}
                    CartListPrice={item.CartListPrice}
                    OrderDate={item.OrderDate}
                  />
                ))}
              </View>
            )}
          </View>
          {orderHistoryList.length > 0 && (
            <TouchableOpacity
              style={styles.downloadBtn}
              onPress={buttonPressHandler}>
              <Text style={styles.downloadBtnTxt}>Download</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },

  lottieAnimation: {
    height: adaptive(250),
  },

  scrollView: {
    flexGrow: 1,
  },

  innerView: {
    flex: 1,
    justifyContent: 'space-between',
  },

  itemContainer: {
    flex: 1,
  },

  listItemContainer: {
    paddingHorizontal: adaptive(SPACING.space_20),
    gap: adaptive(SPACING.space_30),
  },

  downloadBtn: {
    margin: adaptive(SPACING.space_20),
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: adaptive(SPACING.space_36 * 2),
    borderRadius: adaptive(BORDERRADIUS.radius_20),
  },

  downloadBtnTxt: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_18),
    color: COLORS.primaryWhiteHex,
  },
});
