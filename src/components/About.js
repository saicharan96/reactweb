import React  from 'react';
import {Helmet} from "react-helmet";

const About = () => 
{
    return(
<div className="container">
  <Helmet><title>About Me</title></Helmet>
  <div class="card top">
    <h4><b>About</b></h4> 
    <p>A passionate digital marketer expertise in building SEO friendly responsive websites and optimize according to the business needs to drive traffic in different search engines of different countries like Google,Yandex, Microsoft Bing, Baidu, Yahoo Gemini.</p> 
<br/>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
 </div>
  
  </div>
    );
};


export default About;