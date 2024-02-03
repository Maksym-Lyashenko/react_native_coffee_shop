import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {amazonPay, applePay, googlePay} from '../constants/images';
import {COLORS} from '../theme/theme';
import Header from '../components/Payment Screen/Header';
import PaymentOptions from '../components/Payment Screen/PaymentOptions';
import PaymentFooter from '../components/PaymentFooter';
import {useStore} from '../store/store';
import PopUpAnimation from '../components/PopUpAnimation';

type Nav = {
  goBack: () => void;
  navigate: (value: string) => void;
};

interface IPaymentScreen {
  navigation: Nav;
  route: {
    // key: string;
    // name: string;
    params: {
      amount: string;
    };
    // path: undefined;
  };
}

const paymentList = [
  {
    name: 'Wallet',
    icon: 'wallet',
    isIcon: true,
  },

  {
    name: 'Google Pay',
    icon: googlePay,
    isIcon: false,
  },

  {
    name: 'Apple Pay',
    icon: applePay,
    isIcon: false,
  },

  {
    name: 'Amazon Pay',
    icon: amazonPay,
    isIcon: false,
  },
];

const PaymentScreen: React.FC<IPaymentScreen> = ({navigation, route}) => {
  const [paymentMode, setPaymentMode] = useState<string>(paymentList[0].name);
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  const calculateCartPrice = useStore(state => state.calculateCartPrice);
  const addToOrderHistoryListFromCart = useStore(
    state => state.addToOrderHistoryListFromCart,
  );

  const OrderHistoryList = useStore(state => state.OrderHistoryList);

  console.log('=>', OrderHistoryList);

  const price = route.params.amount;

  const buttonHandler = () => {
    setShowAnimation(true);
    addToOrderHistoryListFromCart();
    calculateCartPrice();
    setTimeout(() => {
      setShowAnimation(false);
      navigation.navigate('OrderHistoryScreen');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {showAnimation && (
        <PopUpAnimation
          style={styles.lottieAnimation}
          source={require('../lottie/successful.json')}
        />
      )}
      <ScrollView style={styles.scrollView}>
        <Header navigation={navigation} />
        <PaymentOptions
          paymentList={paymentList}
          paymentMode={paymentMode}
          setPaymentMode={setPaymentMode}
        />
      </ScrollView>
      <PaymentFooter
        buttonTitle={`Pay with ${paymentMode}`}
        price={{price, currency: '$'}}
        buttonHandler={buttonHandler}
      />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },

  lottieAnimation: {
    flex: 1,
  },

  scrollView: {
    flexGrow: 1,
  },
});
