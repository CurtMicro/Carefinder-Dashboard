
import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
import Public from './components/Public'
import Login from './features/auth/Login'
import DashLayout from './components/Dashboard/DashLayout'
import Hospitals from './features/hospitals/Hospitals'
import UserList from './features/users/UserList'
import NewUserForm from './features/users/NewUserForm'
import EditUser from './features/users/EditUser'
import Prefetch from './features/auth/Prefetch'
import PersistLogin from './features/auth/PersistLogin'
import RequireAuth from './features/auth/RequireAuth'
import { ROLES } from './config/roles'
import SingleHospital from './features/hospitals/SingleHospital'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />

        {/* Protected Routes*/}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
            <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />}>

                <Route path="hospitals">
                  <Route index element={<Hospitals />} />
                </Route>
                <Route path="hospital">
                  <Route index element={<SingleHospital />} />
                </Route>


                <Route path="users">
                  <Route index element={<UserList />} />
                  <Route path=":id" element={<EditUser />}></Route>
                  <Route path="new" element={<NewUserForm />}></Route>
                </Route>

              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;


