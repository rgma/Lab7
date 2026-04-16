import { Text, View, TouchableOpacity } from 'react-native';
import InputBar from "./InputBar";

export default function ({ scrollToBottom, sendMessage, setInputBarText, inputBarText }) {

  // function when button is clicked
  const handlePrompt = (text) => {
    setInputBarText(text);
    setTimeout(() => {
      sendMessage();
    }, 100);
  };

  return (
    <View style={{
      flex: 1,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      
      <View style={{
  
        alignItems: 'center',
      }}>
        
        <Text style={{
          fontSize: 28,
          color: '#666',
          marginBottom: 16,
        }}>
          What would you like? 🧋
        </Text>

        {/* Input stays */}
        <InputBar
          onSendPressed={sendMessage}
          onSizeChange={() => scrollToBottom(false)}
          onChangeText={setInputBarText}
          text={inputBarText}
        />

        {/* ✅ PROMPT BUTTONS */}
       <TouchableOpacity 
  style={styles.button} 
  onPress={() => handlePrompt("1")}
>
  <Text>Milk Tea</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={styles.button} 
  onPress={() => handlePrompt("2")}
>
  <Text>Fruit Tea</Text>
</TouchableOpacity>

<TouchableOpacity 
  style={styles.button} 
  onPress={() => handlePrompt("menu")}
>
  <Text>View Menu</Text>
</TouchableOpacity>

      </View>

    </View>
  );
}

const styles = {
  button: {
    width: '100%',
    padding: 12,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center'
  }
};