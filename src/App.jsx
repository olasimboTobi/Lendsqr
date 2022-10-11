// import logo from './logo.svg';
import {useState, useEffect} from "react"
import Login from "./Pages/Login"
import Users from "./Pages/Users"
import User from "./Pages/User"
import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom';
import axiosPrivate from "./hooks/useAxiosPrivate"
import './App.css';

function App() {
  const[users, setUsers] = useState([])
//   const[user, setUser] = useState({})
//   const[error, setError] = useState()
//   const[loading, setLoading] = useState(true)

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
            // setLoading(false)
        } catch (err) {
            console.error(err);
            // setError(err);
            // navigate('/login', { state: { from: location }, replace: true });
        }
    }

    getUsers();

    return () => {
        isMounted = false;
        controller.abort();
    }
  }, [])


//   useEffect(() => {
//     let isMounted = true;
//     const controller = new AbortController();

//     const getUser = async (id) => {
//         try {
//             const response = await axiosPrivate.get(`/users/:${id}`, {
//                 signal: controller.signal
//             });
//             const data = response.data
//             console.log(data);
//             isMounted && setUser(data);
//         } catch (err) {
//             console.error(err);

//         }
//     }

//     getUser();

//     return () => {
//         isMounted = false;
//         controller.abort();
//     }
//   }, [])


  console.log(users)

//   if(loading) return <h1>LOADING...</h1>
//   if(error) return <h1>Error...</h1>
 

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route path="users" element={<Users users={users}/>} />
          <Route path="user" element={<User user={users}/>}/>
        </Route>
      </Routes>
    
  );
}

export default App;
