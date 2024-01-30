import React, { useState } from 'react';
import { TextField, Button, Container, CssBaseline } from '@mui/material';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';


const formStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div css={formStyles}>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={e => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Log In
        </Button>
        <Link to="/login">Go to Login</Link>

      </div>
    </Container>
  );
}

export default LoginForm;