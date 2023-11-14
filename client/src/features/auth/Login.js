import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useDispatch } from "react-redux"
import { useLoginMutation } from "./authApiSlice"
import { setCredentials } from "./authSlice"

import { Box, Button, Checkbox, Stack, FormControlLabel, FormGroup, TextField, Typography, CircularProgress } from "@mui/material"
import usePersist from "../../hooks/usePersist"

import HomeOutlined from "@mui/icons-material/HomeOutlined";

const Login = () => {
  const userRef = useRef()
  const errRef = useRef()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [persist, setPersist] = usePersist()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [login, { isLoading }] = useLoginMutation()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [username, password])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { accessToken } = await login({ username, password }).unwrap()
      dispatch(setCredentials({ accessToken }))
      setUsername('')
      setPassword('')
      navigate('/dash')
    } catch (err) {
      if (!err.status) {
        setErrMsg('No Server Response');
      } else if (err.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg(err.data?.message);
      }
      errRef.current.focus();
    }
  }

  const handleUserInput = (e) => setUsername(e.target.value)
  const handlePwdInput = (e) => setPassword(e.target.value)
  const handleToggle = () => setPersist(prev => !prev)

  if (isLoading) return <CircularProgress position="absolute" top="50%" left="50%" />

  const content = (
    <Stack
      sx={{
        color: "white",
        alignItems: "center",
        minWidth: "30rem",
        m: "auto",
        mt: "10vh",
        p: "2rem",
        borderRadius: "0.375rem",
        background: "#272730",
        boxShadow:
          "0rem 0.125rem 0.375rem -0.065rem #212129,0rem 0.125rem 0.25rem -0.0625rem #2d2d37",
      }}>
      <Link to='/' onClick>
        <HomeOutlined fill="blue" fontSize="large" />
      </Link>
      <Typography variant="h3">Employee Login</Typography>
      <Box ref={errRef} aria-live="assertive">{errMsg}</Box>
      <Box display="flex" p="2rem" justifyContent="center" >
        <FormGroup>
          <TextField
            label="Username:"
            variant="outlined"
            ref={userRef}
            value={username}
            onChange={handleUserInput}
            autoComplete="off"
            m="1rem"
            required
            inputProps={{ style: { borderRadius: "0.375rem", background: "white" } }}
          />
          <br />
          <TextField
            type="password"
            label="Password:"
            variant="outlined"
            ref={userRef}
            value={password}
            onChange={handlePwdInput}
            autoComplete="off"
            m="1rem"
            required
            inputProps={{ style: { borderRadius: "0.375rem", background: "white", } }}
          />

          <br />
          <Button variant="contained" onClick={handleSubmit}>Sign In</Button>
          <FormControlLabel control={<Checkbox checked={persist}
            onChange={handleToggle} />} label="Trust This Device" />
        </FormGroup>
      </Box>

    </ Stack >
  )

  return content
}

export default Login