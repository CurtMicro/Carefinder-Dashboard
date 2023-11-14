import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"
import DashHeader from "./DashHeader"
import DashSideBar from "./DashSideBar"

const DashLayout = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "max-content",
            }}
        >
            <DashHeader />
            <DashSideBar />
            <Box flex="grow" p="0.75rem" >
                <Outlet />
            </Box>
        </Box>
    )
}

export default DashLayout