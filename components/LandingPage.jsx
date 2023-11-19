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
// Import css
import './LandingPage.css';
// TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

export default function LandingPage() {
  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = useState(false);

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
        apiKey: process.env.OPENAI_API_KEY, dangerouslyAllowBrowser: true // This is a security risk
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
    
    <Container maxWidth={false} className>
      {/* Removed the nested Box components */}
      {loading ? (
        <CircularProgress />
      ) : (
        <Box sx={{ textAlign: 'center', width: '100%', BackgroundColor: 'white'}}>
          <Typography component="h2" variant="h2" marginBottom={5}>
            Enter a topic to learn about
          </Typography>
          <form onSubmit={handleSubmit}noValidate>
            <TextField 
              id="standard-basic" 
              name="topic"
              required
              fullWidth // Use fullWidth for responsive width
              autoFocus
              size='large'
              color='success'
              sx={{ mb: 2 }} // Add bottom margin
            />
            <Button
              type="submit"
              fullWidth // Use fullWidth for responsive width
              variant="contained"
              sx={{ mt: 3 }}
            >
              Submit
            </Button>
          </form>
        </Box>
      )}
    </Container>
  );
}