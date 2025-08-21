import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  DimensionValue,
} from 'react-native';
import { CardImageProps } from './types';
import theme from '../../theme';

const CardImage = ({
  source,
  style,
  fullWidth = true,
  height = 200,
  resizeMode = 'cover',
}: CardImageProps): JSX.Element => {
  const imageStyle = [
    styles.image,
    {
      height,
      width: (fullWidth ? '100%' : undefined) as DimensionValue,
    },
    style,
  ];

  return (
    <View style={styles.container}>
      <Image
        source={source}
        style={imageStyle}
        resizeMode={resizeMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.sm,
  },
  image: {
    borderTopLeftRadius: theme.borderRadius.md,
    borderTopRightRadius: theme.borderRadius.md,
  },
});

export default CardImage;
