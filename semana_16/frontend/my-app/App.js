import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';


export default function App() {

  const [ posts, setPosts ] = useState([]);
  const [ loading, setLoading] = useState(true);

  useEffect( () => {

    const getPosts = async () => {
      try {
        const response =  await fetch('http://localhost:3000/api/post');
        const json = await response.json();
        console.log(json);
        setPosts( json.data);

      } catch (error) {
        console.error( { error})
      } finally {
        setLoading(false);
      }
    }

    getPosts();


  }, [] )


  return (
    <View style={styles.container}>
      <Text> Semana 16</Text>
      {
        posts.map(  (post)  => (
          <Text key={post.id}> {post.body} </Text>
        ) )
      }
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
