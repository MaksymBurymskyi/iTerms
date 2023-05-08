import './NotFound.scss';
import Button from '../button/Button';
import React from "react";


function NotFound() {
    
  return <div className='notFound'>
    <div className="container">
      <h2>Oops! Page Nod Found</h2>
      <p>Numerous legal agreements accessible at the touch of your fingerprints for your website or mobile app.</p>
      <Button style={{ padding: "12px 32px", fontSize: "16px", lineHeight: "150%" }} to={'/'}>Back to Home</Button>
    </div>
  </div>

}
  
export default NotFound;