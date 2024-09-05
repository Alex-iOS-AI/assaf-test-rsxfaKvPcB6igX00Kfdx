import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useThemeColor } from '../hooks/useThemeColor';

interface PianoIconProps {
  size?: number;
  color?: string;
}

export default function PianoIcon({ size = 24, color }: PianoIconProps) {
  const iconColor = useThemeColor({ light: color || '#000', dark: color || '#fff' }, 'text');

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM8 19H4V10H8V19ZM14 19H10V10H14V19ZM20 19H16V10H20V19ZM21 8H3V5H21V8Z"
          fill={iconColor}
        />
      </Svg>
    </View>
  );
}
