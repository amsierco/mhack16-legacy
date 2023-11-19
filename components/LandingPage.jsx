import React, {useState} from 'react';
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
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from 'react-bootstrap';

// TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

export default function LandingPage() {
  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        console.log(loading)
          if (oldProgress === 100) {
            return 100;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // const navigate = useNavigate();
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     topic: data.get('topic'),
  //   });
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    const data = new FormData(event.currentTarget);
    const topic = data.get('topic');  
    console.log(topic);
    try {
      const openai = new OpenAI({
        // apiKey: process.env.OPENAI_API_KEY, dangerouslyAllowBrowser: true // This is a security risk
        apiKey: "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", dangerouslyAllowBrowser: true // This is a security risk
      });

      const apiResponse = await openai.chat.completions.create({
        model: "gpt-4-1106-preview",
        messages: [
          {
            "role": "system",
            "content": 'You are a learning curriculum designer who creates a JSON with a multi-step plan on the best way to learn a provided topic. The JSON should include objects of lesson plans with content, explicit steps, exercises, search terms, and explicitly named resources and tools. Be sure to elaborate very much on the steps and always provide resources and tools. There should be a good number of lessons in the lesson plan and a good number of steps in each lesson.\n\nThis is how the json should look, but there should be more lessons, steps, descriptions, resources, tools, and exercises than is this example\n\nThis is how the json should look, but there should be more lessons, steps, descriptions, resources, tools, and exercises than is this example\n\n{\n  "topic": "Pixel Art",\n  "lessonPlans": [\n    {\n      "title": "title here",\n      "content": "Lesson description",\n      "steps": [\n        {\n          "stepNumber": 1,\n          "description": "step description",\n          "resources": [\n            "resources here"\n          ],\n          "tools":[\n            "various tools here"\n          ]\n        }\n      ],\n      "exercises": [\n        {\n          "description": "description of exercise",\n          "searchTerms": [\n            "various search terms here"\n          ]\n        }\n      ],\n    }\n  ]\n}'
          },
          {
            "role": "user",
            "content": topic
          }
        ]
      });
    
      // console.log("response: ", apiResponse)
      console.log("response: ", apiResponse.choices[0].message.content)
      // navigate('/roadmap',  { state: apiResponse.choices[0].message.content }); // Navigate to the response page
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    // <ThemeProvider theme={defaultTheme}>
      <Container maxWidth={false}>
        {/* <CssBaseline /> */}
        {/* <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            widows: 100,
            alignItems: 'center',
          }}
        > */}
      {loading ? (
        <Box>
        <Typography component="h1" variant="h5">
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      </Box>
        
      ) : (
        <Box>
          <Typography component="h6" variant="h2" marginBottom={5}>
             What do you want to learn?
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="topic"
              name="topic"
              autoComplete="topic"
              varient="filled"
              autoFocus
            /> */}
            <Stack>
            <TextField id="standard-basic" 
              name="topic"
              required
              style = {{width: 1000, color: "white"}}
              color='success'
              size='large'
              autoFocus
              />
            <Button
              type="submit"
              style = {{width: 500}}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            </Stack>
          </Box>
        </Box>
      )}
      {/* </Box> */}
      </Container>
    // </ThemeProvider>
  );
}