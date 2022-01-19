# react-native-keyboard-spacer

A simple React Native component that implement a keyboard spacer.


## Installation

If using yarn:

```
yarn add react-native-keyboard-spacer-fixed
```

If using npm:

```
npm i react-native-keyboard-spacer-fixed
```

## Usage

```
import { KeyboardSpacer } from 'react-native-keyboard-spacer-fixed';
```

Simply place a `<KeyboardSpacer />` tag.

```
return <React.Fragment>
  <View style={styles.container}>
    <Text style={[styles.description, { fontSize: 20 }]}>React Native Keyboard Spacer</Text>
    <TextInput style={styles.description} value={value} onChangeText={setValue}/>
  </View>
  <Button style={{ marginBottom: 28 }}>
    Press Me
  </Button>
  <KeyboardSpacer space={20}/>
</React.Fragment>;
```

## Documentation

### Floating Heart Component
| Name                      | Description                              | Default     | Type    |
|---------------------------|------------------------------------------|-------------|---------|
| space                     | Space between component with keyboard    | 70px        | number  |

## Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

## Author
Huy Pham

## License
[MIT](./LICENSE)