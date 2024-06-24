import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Avatar, Paper} from '@mui/material';

const Page = async ({params}) => {
  const post = await getData(params.postId);
  const comments = await getComments(params.postId);

  if (!post) {
    return (
      <Container>
        <Typography variant="h4">There is no post available with this slug.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{minHeight: '100vh'}}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#020138',
          minHeight: '30vh',
          borderRadius: '1rem',
          marginTop: '3rem',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textTransform: 'capitalize',
            fontSize: '2rem',
            padding: '1rem',
            color: 'white',
          }}
        >
          {post.title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          padding: '1rem',
        }}
      >
        {/* <Typography>{post.date}</Typography> */}
        {/* <Typography>Author: {post.author}</Typography> */}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
          lineHeight: '2.5',
        }}
      >
        <Typography
          sx={{
            textTransform: 'capitalize',
            fontSize: '1rem',
            padding: '1rem',
          }}
        >
          {post.body}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#bce3f7',
          minHeight: '10vh',
          borderRadius: '1rem',
          marginTop: '3rem',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textTransform: 'capitalize',
            fontSize: '2rem',
            padding: '1rem',
            color: '#020138',
          }}
        >
          Comments
        </Typography>
      </Box>
      <Box sx={{p: 2, maxWidth: '100%', mx: 'auto', maxWidth: 'screen-sm'}}>
        <Paper sx={{p: 2, borderRadius: 1}}>
          <Typography
            variant="h6"
            mb={4}
            sx={{fontWeight: 'bold'}}
          >
            Comments
          </Typography>

          {comments.map((comment) => {
            return (
              <Box
                key={comment.id}
                sx={{display: 'flex', mb: 4}}
              >
                <Avatar
                  src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                  sx={{mt: 2, width: 40, height: 40, mr: 3}}
                />
                <Box sx={{flex: 1, border: '1px solid #ddd', borderRadius: 1, p: 2}}>
                  <Typography
                    variant="subtitle1"
                    sx={{fontWeight: 'bold', textTransform: 'capitalize'}}
                  >
                    {comment.name}{' '}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{mt: 1}}
                  >
                    {comment.body}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{mt: 1, color: 'blue'}}
                  >
                    {comment.email}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Paper>
      </Box>
    </Container>
  );
};

export default Page;

async function getData(params) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return {error: error.message};
  }
}

async function getComments(params) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params}`);
    if (!res.ok) {
      throw new Error('Failed to fetch Comments');
    }
    const comments = await res.json();
    return comments;
  } catch (error) {
    console.error(error);
    return {error: error.message};
  }
}
