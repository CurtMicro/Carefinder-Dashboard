import { useParams } from 'react-router-dom'
import { useGetUsersQuery } from './usersApiSlice'
import EditUserForm from './EditUserForm'
import { Box, CircularProgress } from '@mui/material'

const EditUser = () => {
    const { id } = useParams()

    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[id]
        }),
    })
    const userContent = user ? <EditUserForm user={user} /> : <CircularProgress />

    let content = (
        <Box display="flex" justifyContent="center">
            {userContent}
        </Box>
    )
    return content
}
export default EditUser