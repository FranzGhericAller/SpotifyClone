import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SpotifyLoginPage from './SpotifyLoginPage';

function App() {
  return (
    <SafeAreaProvider>
      <SpotifyLoginPage />
    </SafeAreaProvider>
  );
}

export default App;
