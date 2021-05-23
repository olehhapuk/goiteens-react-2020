import { useEffect, useState } from 'react';
import { Stack, Box, Heading, Text, Link } from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import axios from 'axios';

function Poster() {
  const [posts, setPosts] = useState([]);
  const [, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setPosts(res.data))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [posts]);

  return (
    <Stack spacing="3">
      {posts.map((post) => (
        <Box key={post.id}>
          <Heading>{post.title}</Heading>
          <Text>{post.body}</Text>
          <Link as={RLink} to={`/posts/${post.id}`}>
            View
          </Link>
        </Box>
      ))}
    </Stack>
  );
}

export default Poster;
