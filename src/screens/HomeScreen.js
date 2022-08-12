import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';

export default function HomeScreen() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        <Button title="Share" onPress={sharePic} />
        {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button title="Take Pic" onPress={takePic} />
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end'
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  }
});

















// import { NavigationContainer } from '@react-navigation/native';
// import React from 'react';
// import { StyleSheet, Text, View,StatusBar,Image,ImageBackground,TouchableOpacity,SafeAreaView } from 'react-native';




// const HomeScreen = ({navigation}) => {
//     return (
//         <SafeAreaView>
//         <ScrollView>

//         </ScrollView>
//       </SafeAreaView>
//     )
// }

// export default HomeScreen;

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: 'black',
//         flex: 1,
//       },
// })





// import React, { useEffect, useState } from 'react'
// import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
// import BottomTabs from '../components/BottomTabs'
// import Header from '../components/Header'
// import Post from '../components/Post'
// import Stories from '../components/Stories'
// import { TABS } from '../data/tabs'
// import {
//   collectionGroup,
//   getFirestore,
//   onSnapshot,
//   getDocs,
//   query,
//   orderBy,
// } from '../firebase'

// const HomeScreen = ({ navigation }) => {
//   const [posts, setPosts] = useState([])
//   const db = getFirestore()

//   const getPosts = async () => {
//     const posts = query(
//       collectionGroup(db, 'posts'),
//       orderBy('timestamp', 'desc')
//     )
//     const snapshot = await getDocs(posts)

//     setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
//   }

//   useEffect(() => getPosts(), [])

//   return (
//     <SafeAreaView style={styles.container}>
//       <Header navigation={navigation} />
//       <Stories />
//       <ScrollView>
//         {posts.map((post, index) => (
//           <Post post={post} key={index} />
//         ))}
//       </ScrollView>
//       <BottomTabs icons={TABS} />
//     </SafeAreaView>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'black',
//     flex: 1,
//   },
// })