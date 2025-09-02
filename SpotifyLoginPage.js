import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const SpotifyLoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      {/* Header with Logo */}
      <View style={styles.header}>
        <View style={styles.spotifyIcon}>
          <View style={styles.iconCircle}>
            <Image
              source={require('./assets/spotify.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
        </View>
        <Text style={styles.logoText}>Spotify</Text>
      </View>

      {/* Form Container */}
      <View style={styles.formContainer}>

        {/* Username Input */}
        <View style={styles.inputContainer}>
          <View style={styles.embossedInput}>
            <TextInput
              style={styles.textInput}
              value={username}
              onChangeText={setUsername}
              placeholder="Username"
              placeholderTextColor="#666"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <View style={styles.embossedInput}>
            <TextInput
              style={styles.textInput}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry
            />
          </View>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Or Connect With */}
        <Text style={styles.connectWithText}>Or Connect With</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>f</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>G</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 50,
    paddingTop: 80,
  },
  logoImage: {
    width: 140,
    height: 150,// This will make the logo dark against green background
  },
  logoText: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    // Embossed effect for Spotify text
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: -2 },
    textShadowRadius: 4,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  inputContainer: {
    marginBottom: 25,
  },
  inputLabel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  embossedInput: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 10,
    // Inner shadow effect
    borderWidth: 1,
    borderColor: '#0a0a0a',
    borderBottomWidth: 3,
    borderBottomColor: '#2a2a2a',
    borderTopWidth: 1,
    borderTopColor: '#0a0a0a',
    borderLeftColor: '#151515',
    borderRightColor: '#151515',
  },
  textInput: {
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 18,
    minHeight: 55,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 40,
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#1DB954',
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#1DB954',
    borderRadius: 25,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#1DB954',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  connectWithText: {
    color: '#1DB954',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
    fontWeight: '500',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  socialButton: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#555',
    // White shadow effect for social buttons
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  socialButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    // White text shadow for social icons
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  signUpText: {
    color: '#999',
    fontSize: 16,
  },
  signUpLink: {
    color: '#1DB954',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SpotifyLoginScreen;