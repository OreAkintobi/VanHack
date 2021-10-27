import * as React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';
import { useThemeColor } from '../../utils';
import { TextProps, ViewProps } from '../../types';

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <DefaultText
      style={[{ color, fontFamily: 'space-mono' }, style]}
      {...otherProps}
    />
  );
}

export function SecondaryText(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    'textSecondary'
  );

  return (
    <DefaultText
      style={[{ color, fontFamily: 'space-mono' }, style]}
      {...otherProps}
    />
  );
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
