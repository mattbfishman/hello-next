import '../styles/globals.scss';
import Layout from '../components/Layout/Layout';
import Login from '../components/Login/Login';
import { UserContext } from '../context/user';
import { useState, useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    //getUser
  
  }, []);

  if(!user){
    return <Login/>
  }

  return (
    <UserContext.Provider value={user}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </UserContext.Provider>
  )

}

export default MyApp
