import React  from 'react';
import {Helmet} from "react-helmet";

const pricing = () => 
{
    return(
<body>
  <div className="portfolio">
<Helmet><title>Projects worked on</title></Helmet>
<div className="container">
<h3 className="center">Projects I Worked on</h3>
<div className="row">
  <div className="col-md-6">
    <div class="card">
    <img className="cli" src={require('../assets/client10.jpg')} />
    <h6>Website, Notifications & Graphic Design</h6>
    <h4>Chemfluence</h4>
    <ul>
       <li><span>Completed Date:</span> 06th March 2019</li>
       <li><span>Technologies :</span>HTML5, CSS3, PHP,Adobe Photoshop.</li>
    </ul>
      </div>
    </div>


    <div className="col-md-6">
    <div class="card">
    <img className="cli" src={require('../assets/client9.PNG')} />
    <h6>Web application, Driver Panel, Email Marketing, Digital Marketing</h6>
    <h4>Minicabee Quote Compare</h4>
    <ul>
                                    <li><span>Completed Date:</span> 12 March 2018</li>
                                    <li><span>Technologies :</span> HTML5, CSS3, PHP, SEO</li>
                                </ul>
      </div>
    </div>


    <div className="col-md-6">
    <div class="card">
    <img className="cli" src={require('../assets/client8.jpg')} />
    <h6>Website, Control Panel, Marketing</h6>
    <h4>Atlas Cars Crawley Ltd.</h4>
    <ul>
                                    <li><span>Completed Date:</span> 16 April 2018</li>
                                    <li><span>Technologies :</span> PHP, HTML5, CSS3</li>
                                </ul>
      </div>
    </div>
  

    <div className="col-md-6">
    <div class="card">
    <img className="cli" src={require('../assets/client7.jpg')} />
    <h6>Website, Social media Marketing, Local Business, SEO</h6>
    <h4>Gatwick Taxis  United Kingdom</h4>
    <ul>
    <li><span>Completed Date:</span> 19 January 2018</li>
    <li><span>Technologies :</span> HTML5, CSS3, PHP, Google Ads, Facebook Ads.</li>                             
     </ul>
      </div>
    </div>


    <div className="col-md-6">
    <div class="card">
    <img className="cli" src={require('../assets/client6.jpg')} />
    <h6>Website, Control Panel</h6>
    <h4>Rocketernal Church Chennai</h4>
    <ul>
                                    <li><span>Completed Date:</span> 23 october 2018</li>
                                    <li><span>Technologies :</span> HTML5, CSS3, PHP, Youtube Integration</li>
                                </ul>
      </div>
    </div>

    
    <div className="col-md-6">
    <div class="card">
    <img className="cli" src={require('../assets/client5.png')} />
    <h6>Website, control panel, Digital Marketing</h6>
    <h4>Taxego</h4>
    <ul>
    <li><span>Completed Date:</span>Still on Process </li>
    <li><span>Technologies :</span>HTML5, CSS3, PHP, SMM, SEO, Local Business</li>
                                </ul>
      </div>
    </div>

  </div>
</div>
</div>
  </body>
    );
};


export default pricing;