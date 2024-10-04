import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Get in Touch
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="message"
          label="Message"
          type="text"
          id="message"
          multiline
          rows={4}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;