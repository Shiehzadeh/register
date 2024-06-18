import React, { useState } from 'react';
import reactDom from "react-dom";
import {
  Box,
  Grid,
  FormControl,
  TextField,
  FormHelperText,
  Button,
  Typography,
  Stack,
} from '@mui/material';




function RegisterForm() {

  //================================
 /*  const showData = () => {
    <Box>
      {/* {v_fields['name']['error']}<FormHelperText error={true}>{v_fields['bio']['errorText']}</FormHelperText>
    </Box>
  }; */

  //================================

  const init_fields = {
    name: '',
    email: '',
    password: '',
    bio: '',
  };
  const [fields, setFields] = useState(init_fields);

  //================================
  const updateFields = (event, customVals = null) => {
    const val = customVals ? customVals['value'] : event.target.value;
    const key = customVals ? customVals['name'] : event.target.name;
    setFields((prevState) => ({ ...prevState, [key]: val }));
  };
  //================================
  const init_required = {
    name: { error: false, errorText: '', show: false, showText: '', required: true },
    email: { error: false, errorText: '', show: false, showText: '', required: true },
    password: { error: false, errorText: '', show: false, showText: '', required: true },
    bio: { error: false, errorText: '', show: false, showText: '', required: true },
  };

  const [v_fields, setVFields] = useState(init_required);
  //================================
  const validate = () => {
    let required;
    required = {
      name: { error: false, errorText: '', show: false, showText: '', required: true },
      email: { error: false, errorText: '', show: false, showText: '', required: true },
      password: { error: false, errorText: '', show: false, showText: '', required: true },
      bio: { error: false, errorText: '', show: false, showText: '', required: true, },
    };

    let has_error = false;
    Object.keys(fields).forEach((name, index) => {
      const val = fields[name];

      if (required[name]) {
        console.log('req', name, val, required[name].required);
        if (!val && required[name].required) {
          required[name] = { error: true, errorText: 'Completion of this field is required' };
          has_error = true;
        }
      }
    });
    setVFields(required);
    //console.log(errors , has_error)
    if (!has_error) {
      Object.keys(fields).forEach((name, index) => {
        const val = fields[name];

        if (val) {
          required[name] = { show: true, showText: val };
        }
      });
    }

  }

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Stack>
        <Typography mb={5} textAlign={'center'}>Registration Form</Typography>
      </Stack>

      <Box component="form">
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6} md={3}>

            <FormControl fullWidth>
              <TextField
                label="Name: "
                InputLabelProps={{ shrink: true }}
                value={fields['name'] || ''}
                fullWidth
                required
                name="name"
                onChange={updateFields}
                error={v_fields['name']['error']}
              />
              {v_fields['name']['error'] && <FormHelperText error={true}>{v_fields['name']['errorText']}</FormHelperText>}
            </FormControl>

          </Grid>
          <Grid item xs={12} sm={6} md={3}>

            <FormControl fullWidth>
              <TextField
                label="Email: "
                InputLabelProps={{ shrink: true }}
                value={fields['email'] || ''}
                fullWidth
                required
                name="email"
                type="email"
                onChange={updateFields}
                error={v_fields['email']['error']}
              />
              {v_fields['email']['error'] && <FormHelperText error={true}>{v_fields['email']['errorText']}</FormHelperText>}
            </FormControl>

          </Grid>
          <Grid item xs={12} sm={6} md={3}>

            <FormControl fullWidth>
              <TextField
                label="Password: "
                type={showPassword ? 'text' : 'password'}
                InputLabelProps={{ shrink: true }}
                value={fields['password'] || ''}
                fullWidth
                required
                name="password"
                onClick={handleClickShowPassword}
                onChange={updateFields}
                error={v_fields['password']['error']}
              />
              {v_fields['password']['error'] && <FormHelperText error={true}>{v_fields['password']['errorText']}</FormHelperText>}
            </FormControl>

          </Grid>

          <Grid item xs={12} sm={6} md={3}>

            <FormControl fullWidth>
              <TextField
                label="Bio: "
                InputLabelProps={{ shrink: true }}
                value={fields['bio'] || ''}
                fullWidth
                required
                multiline
                name="bio"
                onChange={updateFields}
                error={v_fields['bio']['error']}
              />
              {v_fields['bio']['error'] && <FormHelperText error={true}>{v_fields['bio']['errorText']}</FormHelperText>}
            </FormControl>

          </Grid>

          <Grid item xs={12}>
            <Button onClick={() => validate()} variant="contained" size="large" title={'send'} sx={{ ml: 'auto !important' }}>
              send
            </Button>
          </Grid>

        </Grid>
      </Box>


      <Stack direction={'column'} pb={2}>

        {v_fields['name']['show'] && <FormHelperText show={true}>
          <Typography>your name is: </Typography>
          {v_fields['name']['showText']}
        </FormHelperText>}

        {v_fields['email']['show'] && <FormHelperText show={true}>
          <Typography>your email is: </Typography>
          {v_fields['email']['showText']}
        </FormHelperText>}

        {v_fields['password']['show'] && <FormHelperText show={true}>
          <Typography>your password is: </Typography>
          {v_fields['password']['showText']}
        </FormHelperText>}

        {v_fields['bio']['show'] && <FormHelperText show={true}>
          <Typography>your bio is: </Typography>
          {v_fields['bio']['showText']}
        </FormHelperText>}
      </Stack>

    </>

  )
}

reactDom.render(<RegisterForm />, document.getElementById('root'));
