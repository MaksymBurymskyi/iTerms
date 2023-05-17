import './MainPage.scss';

import axios from 'axios';
import { useEffect, useState } from "react";




function MainPage() {

  const [smth, setSmth] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3100").then(({ data }) => {
      setSmth(data);
      console.log('data :>> ', data);
    })
  }, [])

  // useEffect(() => {
  //   async function trySmth () {
  //     try {
  //       let response = await axios.get("http://localhost:3100");
  //       console.log(response);
  //       return response;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   } ;
  // },[])
  
 
  
  return <div className='main'>MainPage
 {/* <div>{smth.map((item, index) => (
        <div key={index}>{item}</div>
      ))} </div> */}
  <div>{ smth}</div> 
    
  </div>
}

export default MainPage;