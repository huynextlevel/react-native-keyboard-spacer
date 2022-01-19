import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { KeyboardSpacer } from 'react-native-keyboard-spacer';

const App = () => {
	return <React.Fragment>
    <View style={styles.container}>
      <Text style={[styles.description, { fontSize: 20 }]}>React Native Keyboard Spacer</Text>
      <Text style={styles.description}>Select each word in the order it was presented to you.</Text>
    </View>;
    <TouchableOpacity style={{ width: 320, height: 40, borderWidth: 1, borderColor: '#000', borderRadius: 18, marginBottom: 28, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: '500' }}>Press Me</Text>
    </TouchableOpacity>
    <KeyboardSpacer space={20} />
  </React.Fragment>
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
