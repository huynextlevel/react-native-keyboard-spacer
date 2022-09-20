import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, Keyboard } from 'react-native';

const KeyboardSpacer = ({ space, isUsingNativeDriver }) => {
  const [state, setState] = useState({
    keyboardHeight: 0,
  });
  const [imageHeight] = useState(new Animated.Value(0));
  
  useEffect(() => {
    setState({
      ...state,
      keyboardHeight: Dimensions.get('window').height,
    });
    const keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', keyboardWillShow);
    const keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', keyboardWillHide);

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    }
  }, [])

  const keyboardWillShow = (e) => {
    Animated.timing(imageHeight, {
      duration: 240,
      toValue: e.endCoordinates.height - space,
      useNativeDriver: isUsingNativeDriver
    }).start();
  }

  const keyboardWillHide = () => {
    Animated.timing(imageHeight, {
      duration: 240,
      toValue: 0,
      useNativeDriver: isUsingNativeDriver
    }).start();
  }

  return <Animated.View style={{transform: [{ scaleY: imageHeight }]}} />
}

KeyboardSpacer.propTypes = {
  space: PropTypes.number
}

KeyboardSpacer.defaultProps = {
  space: 70,
  isUsingNativeDriver: true
}


export default KeyboardSpacer;
