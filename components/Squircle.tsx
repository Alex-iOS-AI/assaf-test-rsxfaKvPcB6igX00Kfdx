import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface SquircleProps {
  size: number;
  color: string;
  style?: ViewStyle;
}

const Squircle: React.FC<SquircleProps> = ({ size, color, style }) => {
  return (
    <View
      style={[
        styles.squircle,
        { width: size, height: size, backgroundColor: color },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  squircle: {
    borderRadius: 30,
  },
});

export default Squircle;