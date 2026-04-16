import React, { useRef } from 'react'; // 1. Add useRef
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

export default function InputBar({ text, onChangeText, onSizeChange, onSendPressed }) {
    const inputRef = useRef(null); // 2. Create the ref

    return (
        <View style={styles.inputBar}>
            <TextInput 
                style={styles.textBox}
                ref={inputRef} // 3. Assign the ref correctly
                multiline={true}
                onChangeText={(text) => onChangeText(text)}
                onContentSizeChange={onSizeChange}
                value={text} 
            />
            <TouchableHighlight 
                style={styles.sendButton} 
                onPress={() => onSendPressed()}
            >
                <Text style={{ color: 'white' }}>Send</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    inputBar: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 0,
  paddingVertical: 20,
  width: '100%',
    },

    textBox: {
        textAlign: 'center',
        marginHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        flex: 1,
        fontSize: 16,
        paddingHorizontal: 300,
        backgroundColor: 'white'
    },
    sendButton: {
        paddingLeft: 15,
        paddingTop:5, 
        paddingBottom:5, 
        marginLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        backgroundColor: '#66db30'
    },
});
