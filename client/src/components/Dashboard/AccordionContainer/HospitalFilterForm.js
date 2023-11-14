import { Box, Button, FormControl, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const HospitalFilterForm = () => {

    const navigate = useNavigate()

    const [path, setPath] = useState('/')
    const getAllHospitals = () => { navigate(`/dash/hospitals`) }

    const getNav = () => {
        if (path.includes("providerId")) { navigate(`/dash/hospital${path}`) }
        else navigate(`/dash/hospitals${path}`)
    }

    const changePath = (param, value) => {
        setPath(`?${param}=${value}`)
    }

    let formProps = (
        { margin: "2px", borderRadius: "0.375rem", background: "white" }
    )
    return (
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", margin: "0", padding: "0" }}>
            <Button variant="contained" onClick={getAllHospitals} >All Hospitals</Button>
            <Typography textAlign="center" variant='h6'>Filters</Typography>
            <FormControl variant='filled' sx={formProps}>
                <TextField
                    label="Provider Id:"
                    variant="filled"
                    size='small'
                    autoComplete='off'
                    onChange={e => changePath("providerId", e.target.value)}
                />
            </FormControl>
            <FormControl variant='filled' sx={formProps}>
                <TextField
                    label="City:"
                    variant="filled"
                    size='small'
                    autoComplete='off'
                    onChange={e => changePath("city", e.target.value)}
                />
            </FormControl>
            <FormControl variant='filled' sx={formProps}>
                <TextField
                    label="State:"
                    variant="filled"
                    size='small'
                    autoComplete='off'
                    onChange={e => changePath("state", e.target.value)}
                />
            </FormControl>
            <FormControl variant='filled' sx={formProps}>
                <TextField
                    label="County Name:"
                    variant="filled"
                    size='small'
                    autoComplete='off'
                    onChange={e => changePath("countyName", e.target.value)}
                />
            </FormControl>
            <FormControl variant='filled' sx={formProps}>
                <TextField
                    label="Hospital Name:"
                    variant="filled"
                    size='small'
                    autoComplete='off'
                    onChange={e => changePath("hospitalName", e.target.value)}
                />
            </FormControl>
            <FormControl variant='filled' sx={formProps}>
                <TextField
                    label="Hospital Type:"
                    variant="filled"
                    size='small'
                    autoComplete='off'
                    onChange={e => changePath("hospitalType", e.target.value)}
                />
            </FormControl>
            <FormControl variant='filled' sx={formProps}>
                <TextField
                    label="Hospital Ownership:"
                    variant="filled"
                    size='small'
                    autoComplete='off'
                    onChange={e => changePath("ownership", e.target.value)}
                />
            </FormControl>
            <FormControl variant='filled' sx={formProps}>
                <TextField
                    label="Emergency :"
                    variant="filled"
                    size='small'
                    autoComplete='off'
                    onChange={e => changePath("emergency", e.target.value)}
                />
            </FormControl>

            <Button variant="contained" onClick={getNav} >Search</Button>

        </Box>
    )
}

export default HospitalFilterForm