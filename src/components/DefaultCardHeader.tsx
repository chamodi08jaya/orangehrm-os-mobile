/*
 * This file is part of OrangeHRM
 *
 * Copyright (C) 2020 onwards OrangeHRM (https://www.orangehrm.com/)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import withTheme, {WithTheme} from 'lib/hoc/withTheme';

function DefaultCardHeader(
  props: React.PropsWithChildren<DefaultCardHeaderProps>,
) {
  const {children, style, theme} = props;
  const headerStyle: StyleProp<ViewStyle> = [styles.cardHeader];
  if (style) {
    headerStyle.push(style);
  }
  return (
    <View
      style={[
        styles.cardHeader,
        style,
        {
          borderTopLeftRadius: theme.borderRadius,
          borderTopRightRadius: theme.borderRadius,
        },
      ]}>
      {children}
    </View>
  );
}

interface DefaultCardHeaderProps extends WithTheme {
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  cardHeader: {
    elevation: 1,
    width: '100%',
  },
});

export default withTheme<DefaultCardHeaderProps>()(DefaultCardHeader);
