import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useThemeColor } from '../hooks/useThemeColor';

interface TreeIconProps {
  size?: number;
  color?: string;
}

export default function TreeIcon({ size = 24, color }: TreeIconProps) {
  const iconColor = useThemeColor({ light: color || '#000', dark: color || '#fff' }, 'text');

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 2L3 9L5 20H19L21 9L12 2ZM12 5L18 10L17 18H7L6 10L12 5Z"
          fill={iconColor}
        />
      </Svg>
    </View>
  );
}