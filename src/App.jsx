import {useState, useEffect} from "react"
import Login from "./Pages/Login"
import Users from "./Pages/Users"
import User from "./Pages/User"
import Layout from "./components/Layout";
import { Routes, Route, useNavigate } from 'react-router-dom';
import axiosPrivate from "./hooks/useAxiosPrivate"
import './App.css';

function App() {

  const navigate = useNavigate()

  
  const[users, setUsers] = useState([])

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
        try {
            const response = await axiosPrivate.get('/users', {
                signal: controller.signal
            });
            const data = response.data
            console.log(data);
            isMounted && setUsers(data);
           
        } catch (err) {
            console.error(err);
            
        }
    }

    getUsers();

    return () => {
        isMounted = false;
        controller.abort();
    }
  }, [])


  console.log(users)


  const handleClick = (id) => {
     navigate(`/user/${id}`)
  }
 

  return (
       
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/users" element={<Users users={users} onLink={handleClick}/>} />
          <Route path="/user/:id" element={<User/>}/>
        </Route>
      </Routes>
    
  );
}

export default App;
