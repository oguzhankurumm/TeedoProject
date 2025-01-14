import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 812;

const widthRatio = width / guidelineBaseWidth;
const heightRatio = height / guidelineBaseHeight;

export type SizeType = number;

export const scale = (size: SizeType) => widthRatio * size;
export const verticalScale = (size: SizeType) => heightRatio * size;

const defaultModerateFactor = width > guidelineBaseWidth ? 0.5 : 1.25;

export const moderateScale = (size: SizeType, factor = defaultModerateFactor) =>
  size + (scale(size) - size) * factor;
