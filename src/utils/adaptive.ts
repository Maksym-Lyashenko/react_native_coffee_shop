import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get('window');

export function adaptive(size: number, multiplier = 2) {
    const scale = (width / height) * multiplier;
    const newSize = size * scale;

    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}; 