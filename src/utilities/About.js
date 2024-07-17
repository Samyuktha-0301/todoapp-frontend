import React from 'react';

import anima from '../components/todoanimation.json';
import Lottie from 'lottie-react';
const About=()=>{
return (
    <div className='About' style={{marginLeft:'30px',width: '95%', height: '100vh'}}>
        <h style={{fontSize:'30px'}}>About APP</h>
    <p style={{fontSize:'20px'}}>ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules. We can add more tasks at any time and delete a task that is completed. 
</p>
<h1></h1>
 <h1 style={{fontSize:'20px',color:'black'}}>Features:</h1>
 <Lottie animationData={anima} style={{ float: 'right', 
            height:'300px',
            display: 'flex',alignitems: 'flex-end',
            width:'400px' }}/>
    <h2>In this version of the ToDo list, the user will be getting four options:</h2>
    
    <li>Create (add) a new task or adding a new ToDo in the ToDo List App.</li>
    <li>See all the tasks or View all the ToDos that were added to the app.</li>
    <li>Delete any ToDo from the list of ToDos.</li>
    <li>Exit from the app.</li>
   
    </div>
    

)
}

export default About;