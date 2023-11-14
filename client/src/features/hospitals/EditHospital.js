import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectHospitalById } from "./hospitalsApiSlice"
import EditHospitalForm from "./EditHospitalForm"
import { Box, CircularProgress } from "@mui/material"


const EditHospital = () => {
    const { id } = useParams()

    const hospital = useSelector(state => selectHospitalById(state, id))
    const hospitalContent = hospital ? <EditHospitalForm hospital={hospital} /> : <CircularProgress position="absolute" top="50%" left="50%" />

    let content = (
        <Box display="flex" justifyContent="center">
            {hospitalContent}
        </Box>
    )
    return content
}

export default EditHospital