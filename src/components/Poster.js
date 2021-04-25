import { useEffect, useState } from 'react';
import { Stack, Box, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';

function Poster() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setPosts(res.data))
      .finally(() => setLoading(false));
  }, []);

  // Async Await
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       setLoading(true);

  //       const res = await axios.get(
  //         'https://jsonplaceholder.typicode.com/posts'
  //       );

  //       setPosts(res.data);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [images]);

  return (
    <Stack spacing="3">
      {posts.map((post) => (
        <Box key={post.id}>
          <Heading>{post.title}</Heading>
          <Text>{post.body}</Text>
        </Box>
      ))}
    </Stack>
  );
}

export default Poster;
