import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserById } from "./usersApiSlice";
import EditIcon from '@mui/icons-material/Edit';
import { Grid, Card, CardHeader, Avatar, Button } from "@mui/material";

const User = ({ userId }) => {
    const user = useSelector(state => selectUserById(state, userId))

    const navigate = useNavigate()

    if (user) {
        const handleEdit = () => navigate(`/dash/users/${userId}`)

        const userRolesString = user.roles.toString().replaceAll(',', ', ')

        return (
            <Grid item>
                <Card
                    square
                    sx={{
                        color: "white",
                        height: "16rem",
                        width: "16rem",
                        borderRadius: "0.375rem",
                        background: "#272730",
                        boxShadow:
                            "0rem 0.125rem 0.375rem -0.065rem #212129,0rem 0.125rem 0.25rem -0.0625rem #2d2d37",
                    }}
                ><CardHeader
                        avatar={<Avatar>{userRolesString}</Avatar>}
                        title={user.username}
                        subheader={userRolesString}
                    />
                    <Button onClick={handleEdit}>
                        <EditIcon sx={{ color: "white" }} />
                    </Button>
                </Card>
            </Grid >
        )
    } else return null
}

export default User