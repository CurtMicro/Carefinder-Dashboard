import { store } from "../../app/store"
import { usersApiSlice } from "../users/usersApiSlice"
import { hospitalsApiSlice } from "../hospitals/hospitalsApiSlice"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"

const Prefetch = () => {
    useEffect(() => {
        console.log('subscribing')
        const hospitals = store.dispatch(hospitalsApiSlice.endpoints.getHospitals.initiate())
        const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

        return () => {
            console.log('unsubscribing')
            hospitals.unsubscribe()
            users.unsubscribe()
        }
    }, [])

    return <Outlet />
}
export default Prefetch
