import React  from 'react';

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import './style.css';

const Home = () => 
{
    return(

 
 
        
  <div className="container">
  <div class="card">
  <Skeleton duration={2} count={5} >
    <h4><b>Welcome</b></h4> 
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
    </Skeleton>
</div>

  </div>  
    );
};


export default Home;