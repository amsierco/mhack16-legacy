import React from "react"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import OpenAI from 'openai'
import { createTheme, ThemeProvider } from '@mui/material/styles';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function LandingPage() {
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     topic: data.get('topic'),
  //   });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const topic = data.get('topic');  
    console.log(topic);
    try {
      const openai = new OpenAI({
        apiKey: "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", dangerouslyAllowBrowser: true // This is a security risk
      });

      const apiResponse = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": "You are a learning curriculum designer who creates a JSON with a multi-step plan on the best way to learn a provided topic\n\nThe JSON should include objects of lesson plans with content, exercises, and search terms\n"
          },
          {
            "role": "user",
            "content": topic
          }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
    
      console.log("response: ", apiResponse)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
             What do you want to learn?
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="topic"
              name="topic"
              autoComplete="topic"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}