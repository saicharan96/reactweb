import React  from 'react';
import {Helmet} from "react-helmet";

const About = () => 
{
    return(
<body>
  <Helmet><title>About Me</title></Helmet>
  <div className="about">
   <div className="container">
     <div className="row">
       <div className="col-md-6">
   <h3>About Me</h3>
   <p>A passionate digital marketer expertise in building SEO friendly responsive websites and optimize according to the business needs to drive traffic in different search engines like Google,Yandex, Microsoft Bing, Baidu, Yahoo and improves the business searches and visibilty using Paid Ads with ultimate result towards ROI.</p>
   <br/>
   <p>My interest towards Digital Marketing arised when i was pursuing my Engineering, while my friends moved towards development side learning new stuffs. I was bit confused about where should my career path moving on, but still i sticked with digital marketing and started exploring all the products on digital marketing. Trying all the softwares and tools to gain more knowledge on how exactly it works.</p>

   <div class="card yellow">
     <p><b>“Don’t optimize for conversion, optimize for revenue.” 
      <br/> <span className="right">-Neil Patel</span></b></p></div><br/>
    <p><b>Email: saiseotechie@gmail.com</b></p>
    <p><b> Phone: + 91 9551936390</b></p>
   <button className="buttonabout">Contact Me</button>
   </div>
   <div className="col-md-6">
   <img className="aboutimage"  id="borderimg2" src={require('../assets/sai.jpg')} />
     </div>
    </div> </div></div>

    <footer id="footer">
        <div className="container">
            <p>Copy © 2019 SEO Techie. Crafted  by <a href="http://seotechie.tk/">SEO Techie</a></p>
        </div>
    </footer>
  </body>
    );
};


export default About;