import React  from 'react';
import {Helmet} from "react-helmet";
import './style.css';

const Home = () => 
{
    return(
      <body>
<div className="main">
  <div className="container">
          <Helmet><title>SEO Techie | Digital Marketer-Web Designer </title></Helmet>   
    <div className="row top">
   <div className="col-md-5">
   <img className="mainimage topper" src={require('../assets/dd.png')} />
   </div>
   <div className="col-md-7 topper maintext">
     <h5>Hello, I'm Saicharan</h5>
     <h3>I'm a Passionate Digital Marketer.</h3>
     <p>A techie with knowledge of different search strategy Marketing</p>
     <a href="https://www.facebook.com/saicharan.jilla" target="_blank" class="fa fa-facebook"></a>
<a href="https://plus.google.com/u/0/100628277183215746934" target="_blank" class="fa fa-google"></a>
<a href="https://www.linkedin.com/in/saicharan-govindaraj-578a2613b/" target="_blank" class="fa fa-linkedin"></a>
<a href="https://www.instagram.com/sai_charan_explorer/?hl=en" target="_blank" class="fa fa-instagram"></a><br/>
 <button className="buttonread mid">Read More<i class="fa fa-angle-right"></i></button>
   </div>
  </div>  
  </div>
 </div>
 <div className="about">
   <div className="container">
     <div className="row">
       <div className="col-md-6">
   <h3>About Me</h3>
   <p>A passionate digital marketer expertise in building SEO friendly responsive websites and optimize according to the business needs to drive traffic in different search engines like Google,Yandex, Microsoft Bing, Baidu, Yahoo and improves the business searches and visibilty using Paid Ads with ultimate result towards ROI.</p>
    <p><b>Email: saiseotechie@gmail.com</b></p>
    <p><b> Phone: + 91 9551936390</b></p>
   <button className="buttonabout">Read More<i class="fa fa-angle-right"></i></button>
   </div>
   <div className="col-md-6">
   <img className="aboutimage"  id="borderimg2" src={require('../assets/sai.jpg')} />
     </div>
    </div> </div></div>
 </body>
    );
};


export default Home;