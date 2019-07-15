import React  from 'react';
import {Helmet} from "react-helmet";

const Contact = () => 
{
    return(
      <body>
        <Helmet><title>Contact Me</title></Helmet>
        <div class="contact">
      <div className="container topper">
      <div class="row">
        <div class="col-md-5">
       <div class="card">
        <h3>Contact Me</h3>
        <h4><b>Email :</b> saiseotechie@gmail.com</h4>
        <h4><b>Contact Number :</b> +91 9551936390</h4>
        <h4><b>Linkedn Id :</b> <a href= " https://www.linkedin.com/in/saicharan-govindaraj-578a2613b/">Click Here </a></h4>
       
         </div>
          </div>
          <div class="col-md-7">
          <iframe src="https://tawk.to/chat/5d2c17fcbfcb827ab0cbc285/default" class="iframe"></iframe>

            </div>
        </div>
      </div></div>
      </body>
    );
};


export default Contact;