import React from 'react';
import {ImageProps, StyleSheet, Text, View} from 'react-native';
import {TFavoritesItem} from '../../types/types';
import ImageBGInfo from '../ImageBGInfo';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import {adaptive} from '../../utils/adaptive';

interface IFavoritesItemCard extends TFavoritesItem {
  toggleFavourite: (favourite: boolean, type: string, id: string) => void;
}

const FavoritesItemCard: React.FC<IFavoritesItemCard> = ({
  id,
  name,
  type,
  imagelink_portrait,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  favourite,
  description,
  toggleFavourite,
}) => {
  return (
    <View style={styles.container}>
      <ImageBGInfo
        enableBackHandler={false}
        imagelink_portrait={imagelink_portrait}
        type={type}
        id={id}
        favourite={favourite}
        name={name}
        special_ingredient={special_ingredient}
        ingedients={ingredients}
        average_raiting={average_rating}
        raitings_count={ratings_count}
        roasted={roasted}
        toggleFavourite={toggleFavourite}
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.linearGradient}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </LinearGradient>
    </View>
  );
};

export default FavoritesItemCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: adaptive(BORDERRADIUS.radius_25),
    overflow: 'hidden',
  },

  linearGradient: {
    gap: adaptive(SPACING.space_10),
    padding: adaptive(SPACING.space_20),
  },

  descriptionTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_16),
    color: COLORS.secondaryLightGreyHex,
  },

  descriptionText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: adaptive(FONTSIZE.size_14),
    color: COLORS.primaryWhiteHex,
  },
});
