import './NotFound.scss';
import Button from '../button/Button';
import React from "react";
import Image404 from "../../imgs/404.svg"

function NotFound() {
    
  return <div className='notFound'>
    <div className="container">
      <img src={Image404} alt="error 404" />
      <h2>Oops! Page Nod Found</h2>
      <p>Numerous legal agreements accessible at the touch of your fingerprints for your website or mobile app.</p>
      <Button addClass={'mainBtn'} style={{ padding: "12px 32px" }} to={'/'}>Back to Home</Button>
    </div>
  </div>

}
  
export default NotFound;
