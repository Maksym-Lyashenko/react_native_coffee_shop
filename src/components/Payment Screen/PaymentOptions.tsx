import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {adaptive} from '../../utils/adaptive';
import {SPACING} from '../../theme/theme';
import PaymentMethod from './PaymentMethod';
import CreditCard from './CreditCard';

interface IPaymentOptions {
  paymentList: {
    name: string;
    icon: any;
    isIcon: boolean;
  }[];
  paymentMode: string;
  setPaymentMode: React.Dispatch<React.SetStateAction<string>>;
}

const PaymentOptions: React.FC<IPaymentOptions> = ({
  paymentList,
  paymentMode,
  setPaymentMode,
}) => {
  return (
    <View style={styles.container}>
      <CreditCard setPaymentMode={setPaymentMode} paymentMode={paymentMode} />
      {paymentList.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setPaymentMode(item.name)}>
          <PaymentMethod
            paymentMode={paymentMode}
            name={item.name}
            icon={item.icon}
            isIcon={item.isIcon}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PaymentOptions;

const styles = StyleSheet.create({
  container: {
    padding: adaptive(SPACING.space_15),
    gap: adaptive(SPACING.space_15),
  },
});
