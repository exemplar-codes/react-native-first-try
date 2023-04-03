import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to 'column'/'column-reverse'/'row'/'row-reverse'
      <View style={styles.container}>
        <Text style={styles.headerStyle}>flexDirection: 'row'</Text>


        <LBox {...{}}>
          <MBox {...{right: 0, bottom: 0, backgroundColor: 'yellow', position: 'static'}}>
            <SBox {...{ position: 'absolute', right: 0, top: 0 }} />
          </MBox>
        </LBox>


      </View>
    );
  }
}

function LBox(props = {}) {
  return <View style={[{ flexDirection: 'row' }, styles.elementsContainer]}>
    <View style={{ width: 200, height: 200, backgroundColor: '#EE2C38', ...props }} >
      {props.children}
    </View>
  </View>
}
function MBox(props = {}) {
  return <View style={{ width: 100, height: 100, backgroundColor: '#FAA030', ...props }} >
    {props.children}
  </View>
}
function SBox(props = {}) {
  return <View style={{ width: 50, height: 50, backgroundColor: '#32B76C', ...props }} />
}
const styles = {
  container: {
    marginTop: 48,
    flex: 1
  },
  headerStyle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 24
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: '#ecf5fd',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24
  }
}