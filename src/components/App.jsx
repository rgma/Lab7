import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import AIView from './AIView';

export default function App() {
  return (
    <PaperProvider>
      <View style={{ flex: 1, minHeight: '100vh', width: '100%' }}>
        <AIView />
      </View>
    </PaperProvider>
  );
}