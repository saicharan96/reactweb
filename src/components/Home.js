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
    <div className="service" data-scroll-index="2">
        <div className="container">
        <h3>My Quality Services</h3><br/>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="service-single">
                        <span>  <center><img className="smallimg" src={require('../assets/responsive.png')} /></center></span>
                        <h5>Web Design</h5>
                        <p>Web application development is accelerationg at an exponential rate. I deliver robust solutions that help with your requirements to grow while staying within your budget and on time delivery.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="service-single">
                       <span><center><img className="smallimg" src={require('../assets/ads.png')} /></center></span>
                        <h5>Digital Marketing</h5>
                        <p>Creating Business Websites doesn't make sense, if it is not viewed by people all over the world, Digital Marketing is the solution for all these business marketing either in organic way or through paid advertising. </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div class="service-single">
                        <span><center><img className="smallimg" src={require('../assets/app-development.png')} /></center></span>
                        <h5>App Development</h5>
                        <p>There is a equal weightage of having a business website over the applications. Creating Business applications increase  more visibility to the business and to take the business over another level of growth.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="service-single">
                         <span><center><img className="smallimg" src={require('../assets/hosting.png')} /></center></span>
                        <h5>Cloud Hosting</h5>
                        <p>The most popular and inexpensive method of hosting on the internet today is shared server hosting which is ideal for customers looking to host a simple website with basic features and their budget.</p>
                    </div>
                </div>
            </div>
        </div>
</div>
<div className="timelinemain">
<div className="container top">
            <div className="row">
                <div className="col-md-12" >
                    <center>
                      <h3>Education & Experience</h3>
    <ul className="timeline">
    	 <div className="time">
				<br/>
			</div>
        <li>

          <div className="timeline-badge info"><img className="microimg" src={require('../assets/school.png')} /></div>

          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Computer Science and Engineering</h4>
              <p><small className="text-muted"><i class="glyphicon glyphicon-time"></i> 2014-2018</small></p>
            </div>
            <div className="timeline-body">
              <p>Completed my Engineering in computer science with quite decent score 7.5 as GPA. One of the biggest achievement for me is winning "Smart India Hackathon 2017". </p>
               <p><b>KCG College of Technology</b></p>
            </div>
          </div>
        </li><br/>
        <li className="timeline-inverted">
          <div className="timeline-badge info"><img className="microimg" src={require('../assets/skyline.png')} /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">SEO Analyst</h4>
              <p><small className="text-muted"><i class="glyphicon glyphicon-time"></i> Dec 2016 -Jan 2018</small></p>
            </div>
            <div className="timeline-body">
              <p>Basic Responsibility is to monitor the page ranking and to optimize it according to the competitor’s website search ranking. Working on google Analytics to check the crawl errors and to rectify it. AdWords campaign management for the most searching locations to get better performance. Local directory submissions are done in all the popular business directories. Sitemaps are generated for every websites.</p>
		    <p><b>MyTaxe United Kingdom</b></p>
            </div>
          </div>
        </li><br/>
        <li className="timeline">
          <div className="timeline-badge info"><img className="microimg" src={require('../assets/skyline.png')} /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Optimization Specialist</h4>
              <p><small className="text-muted"><i class="glyphicon glyphicon-time"></i> August 2018 - November 2018</small></p>
            </div>
            <div className="timeline-body">
              <p>As an Optimization Specialist to work on the porfolio of advertisers account for promoting their products in amazon ecommerce through paid avertisements, providing account health report and so on.</p>
		    <p><b>Amazon Development Centre India</b></p>
            </div>
          </div>
        </li><br/>
        <li className="timeline-inverted">
          <div className="timeline-badge info"><img className="microimg" src={require('../assets/skyline.png')} /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Mearchine Learning Associate</h4>
              <p><small className="text-muted"><i class="glyphicon glyphicon-time"></i> December 2018 - Current</small></p>
            </div>
            <div className="timeline-body">
              <p>As a Machine Learning Associate need to work on improving the quality of Alexa a Cloud based Virtual Assistant to make a better deliver of information to the customers around different Marketplace.</p>
		    <p><b>Amazon Development Centre India</b></p>
            </div>
          </div>
        </li><br/>
             
    </ul>
                    </center>
</div>
                  
                </div>
            </div>
        </div>
<div class="tools">
<div class="container">
  <div class="row">
  <div class="col-md-2">
  <img className="smallimg" src={require('../assets/analytics.png')} />
  <p>Google Analytics</p>
    </div>
    <div class="col-md-2">
  <img className="smallimg" src={require('../assets/adwords.png')} />
  <p>Google Adwords</p>
    </div>
    <div class="col-md-2">
  <img className="smallimg" src={require('../assets/adsense.png')} />
  <p>Google Adsense</p>
    </div>
    <div class="col-md-2">
  <img className="smallimg" src={require('../assets/html5.png')} />
  <p>HTML V5</p>
    </div>
    <div class="col-md-2">
  <img className="smallimg" src={require('../assets/css-3.png')} />
  <p>CSS V3</p>
    </div>
    <div class="col-md-2">
  <img className="smallimg" src={require('../assets/angular.svg')} />
  <p>Angular 6</p>
    </div>
    </div><hr/>
    <div class="row">
  <div class="col-md-2">
  <img className="smallimg" src={require('../assets/bing.png')} />
  <p>Bing Webmaster</p>
    </div>
    <div class="col-md-2">
  <img className="smallimg medium"  src={require('../assets/facebook-ads.png')}  />
  <p>Social Media Ads</p>
    </div>
    <div class="col-md-2">
  <img className="smallimg medium martop" src={require('../assets/yahoo.png')} />
  <p>Yahoo Gemini</p>
    </div>
    <div class="col-md-2">
  <img className="smallimg medium" src={require('../assets/mybusiness.png')} />
  <p>Google Local Business</p>
    </div>
    <div class="col-md-2">
  <img className="smallimg medium" src={require('../assets/bing-logo-green.png')} />
  <p>Bing Places</p>
    </div>
    <div class="col-md-2">
  <img className="smallimg medium" src={require('../assets/mailchimp.png')} />
    </div>
    </div>
</div>
</div>
<div className="contact">
  <p>Need to Hire Me?</p>
  <h3>Feel Free To Contact</h3>
    <div className="container2">
    <div className="card">
      <div className="row">
        <div className="col-md-6">
        <input className="controls" placeholder="Name*" required /></div>
        <div className="col-md-6">
        <input className="controls" placeholder="Email Address*" required /></div>
        <div className="col-md-6">
        <input className="controls" placeholder="Contact Number*" required /></div>
        <div className="col-md-6">
        <input className="controls" placeholder="Subject*" required /></div>
        </div>
        <textarea className="controls"  placeholder="Write Your Message*" rows="10" required></textarea><br/>
        <center>   <button className="buttonabout">Submit</button></center>
        </div>
      </div>
    </div>
    <footer id="footer">
        <div className="container">
            <p>Copy © 2019 SEO Techie. Crafted  by <a href="http://seotechie.tk/">SEO Techie</a></p>
        </div>
    </footer>
 </body>
    );
};
   export default Home;