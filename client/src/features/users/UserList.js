import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button, CircularProgress, Grid, Box } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import User from "./User"
import { useGetUsersQuery } from "./usersApiSlice"

const UserList = () => {

    const navigate = useNavigate()
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery('usersList', {
        pollingInterval: 120000,
        refetchOnFocus: false,
        refetchOnMountOrArgChange: true
    })

    const addNewUser = () => navigate(`/dash/users/new`)

    let content

    if (isLoading) content = <Box><CircularProgress /></Box>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {
        const { ids } = users
        const gridContent = ids?.length
            ? ids.map(userId => <User key={userId} userId={userId} />)
            : null
        content = (
            <>
                {/* filter and add Bar */}
                <Grid
                    container
                    ml="16rem"
                    width="auto"
                    justifyContent="space-evenly"
                    alignContent="center">
                    <Button onClick={addNewUser}>
                        Add a New User
                        <AddBoxIcon fontSize='large' />
                    </Button>
                </Grid>

                {/* user grid */}
                <Grid
                    container
                    ml="16rem"
                    width="auto"
                    justifyContent="space-evenly"
                    alignContent="center">
                    {gridContent}
                </Grid>
            </>
        )
    }
    return content
}

export default UserList