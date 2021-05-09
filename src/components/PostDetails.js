import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Heading } from '@chakra-ui/react';
import axios from 'axios';

function PostDetails() {
  const { id } = useParams();
  const history = useHistory();
  const [details, setDetails] = useState(null);

  function onBack() {
    history.push('/posts');
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setDetails(res.data);
      });
  }, []);

  return (
    <div>
      <h1>Post details #{id}</h1>
      <Button onClick={onBack}>Go back</Button>
      {details && (
        <>
          <Heading size="lg">{details.title}</Heading>
          <p>{details.body}</p>
        </>
      )}
    </div>
  );
}

export default PostDetails;
