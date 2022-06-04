import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {SyntheticEvent} from 'react';
import {ActivityIndicator} from 'react-native-paper';

export interface Props {}
type ButtonProps = {
  title: string;
  onClick: (event: SyntheticEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export function CustomButton(props: ButtonProps) {
  const {
    textStyle,
    title,
    loading = false,
    disabled = false,
    onClick,
    buttonStyle,
  } = props;
  const ifDisabled = (disabled === true || loading === true) && {
    opacity: 0.5,
  };
  return (
    <TouchableOpacity
      disabled={loading || disabled}
      onPress={e => onClick(e)}
      style={[styles.button, buttonStyle, ifDisabled && ifDisabled]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      {loading && (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator
            style={styles.activityIndicator}
            size="small"
            animating={true}
            color="white"
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2699FB',
    borderRadius: 3,
    paddingVertical: 12,
    paddingHorizontal: 15,
    flexDirection: 'row',
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    // width: '',width: 'auto'
  },
  buttonText: {
    fontSize: 14,
    alignSelf: 'center',
    color: 'white',
    textTransform: 'uppercase',
    paddingVertical: 4,
  },
  activityIndicatorContainer: {
    backgroundColor: 'transparent',
    marginLeft: 15,
  },
  activityIndicator: {
    shadowOpacity: 0.8,
  },
});
