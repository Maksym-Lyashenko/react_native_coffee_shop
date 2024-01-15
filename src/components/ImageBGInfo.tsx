import React from 'react';
import {
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GradientBGIcon from './GradientBGIcon';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {adaptive} from '../utils/adaptive';
import CustomIcon from '../utils/CustomIcon';

interface IImageBGInfo {
  enableBackHandler: boolean;
  imagelink_portrait: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingredient: string;
  ingedients: string;
  average_raiting: number;
  raitings_count: string;
  roasted: string;
  backHandler?: () => void;
  toggleFavourite: (favourite: boolean, type: string, id: string) => void;
}

const ImageBGInfo: React.FC<IImageBGInfo> = ({
  enableBackHandler,
  imagelink_portrait,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingedients,
  average_raiting,
  raitings_count,
  roasted,
  backHandler,
  toggleFavourite,
}) => {
  return (
    <View>
      <ImageBackground
        source={imagelink_portrait}
        style={styles.backgroundImage}>
        <View
          style={[
            styles.imageHeaderContainer,
            {justifyContent: enableBackHandler ? 'space-between' : 'flex-end'},
          ]}>
          {enableBackHandler && (
            <TouchableOpacity onPress={backHandler}>
              <GradientBGIcon
                name="left"
                color={COLORS.primaryLightGreyHex}
                size={adaptive(FONTSIZE.size_16)}
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => toggleFavourite(favourite, type, id)}>
            <GradientBGIcon
              name="like"
              color={
                favourite ? COLORS.primaryRedHex : COLORS.primaryLightGreyHex
              }
              size={adaptive(FONTSIZE.size_16)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.imageInfoOuterContainer}>
          <View style={styles.imageInfoInnerContainer}>
            <View style={styles.infoContainerRow}>
              <View>
                <Text style={styles.itemTitle}>{name}</Text>
                <Text style={styles.itemSubtitle}>{special_ingredient}</Text>
              </View>
              <View style={styles.itemPropertiesContainer}>
                <View style={styles.propertyFirst}>
                  <CustomIcon
                    name={type == 'Bean' ? 'bean' : 'beans'}
                    size={
                      type == 'Bean'
                        ? adaptive(FONTSIZE.size_18)
                        : adaptive(FONTSIZE.size_24)
                    }
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text
                    style={[
                      styles.propertyTextFirst,
                      {
                        marginTop:
                          type == 'Bean'
                            ? adaptive(SPACING.space_4 + SPACING.space_2)
                            : 0,
                      },
                    ]}>
                    {type}
                  </Text>
                </View>
                <View style={styles.propertyFirst}>
                  <CustomIcon
                    name={type == 'Bean' ? 'location' : 'drop'}
                    size={adaptive(FONTSIZE.size_16)}
                    color={COLORS.primaryOrangeHex}
                  />
                  <Text style={styles.propertyTextLast}>{ingedients}</Text>
                </View>
              </View>
            </View>
            <View style={styles.infoContainerRow}>
              <View style={styles.raitingContainer}>
                <CustomIcon
                  name="star"
                  color={COLORS.primaryOrangeHex}
                  size={adaptive(FONTSIZE.size_20)}
                />
                <Text style={styles.raitingTxt}>{average_raiting}</Text>
                <Text style={styles.raitingCount}>({raitings_count})</Text>
              </View>
              <View style={styles.roastedContainer}>
                <Text style={styles.roastedTxt}>{roasted}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ImageBGInfo;

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    aspectRatio: 20 / 25,
    justifyContent: 'space-between',
  },

  imageHeaderContainer: {
    padding: adaptive(SPACING.space_30),
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageInfoOuterContainer: {
    paddingVertical: adaptive(SPACING.space_24),
    paddingHorizontal: adaptive(SPACING.space_30),
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopLeftRadius: adaptive(BORDERRADIUS.radius_20 * 2),
    borderTopRightRadius: adaptive(BORDERRADIUS.radius_20 * 2),
  },

  imageInfoInnerContainer: {
    justifyContent: 'space-between',
    gap: adaptive(SPACING.space_15),
  },

  infoContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_24),
    color: COLORS.primaryWhiteHex,
  },

  itemSubtitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: adaptive(FONTSIZE.size_12),
    color: COLORS.primaryWhiteHex,
  },

  itemPropertiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: adaptive(SPACING.space_20),
  },

  propertyFirst: {
    height: adaptive(55),
    width: adaptive(55),
    borderRadius: adaptive(BORDERRADIUS.radius_15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },

  propertyTextFirst: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: adaptive(FONTSIZE.size_10),
    color: COLORS.primaryWhiteHex,
  },

  propertyTextLast: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: adaptive(FONTSIZE.size_10),
    color: COLORS.primaryWhiteHex,
    marginTop: adaptive(SPACING.space_2 + SPACING.space_4),
  },

  raitingContainer: {
    flexDirection: 'row',
    gap: adaptive(SPACING.space_10),
    alignItems: 'center',
  },

  raitingTxt: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_18),
    color: COLORS.primaryWhiteHex,
  },

  raitingCount: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: adaptive(FONTSIZE.size_12),
    color: COLORS.primaryWhiteHex,
  },

  roastedContainer: {
    height: adaptive(55),
    width: adaptive(55 * 2 + SPACING.space_20),
    borderRadius: adaptive(BORDERRADIUS.radius_15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },

  roastedTxt: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: adaptive(FONTSIZE.size_10),
    color: COLORS.primaryWhiteHex,
  },
});
