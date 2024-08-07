import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export type GeneralStyle = TextStyle | ViewStyle | ImageStyle;

export interface IAtom {
  id: string;
  testID?: string;
  styles?: GeneralStyle;
}
