//App.js

import React from 'react';
import anima from '../components/todoanimation.json';
import Lottie from 'lottie-react';
import './Home.css';
function Home() {
	return (
		<>
			<div id="container">
				
				<div id="wrapper">
					<div id="content">
                    <h1 style={{fontSize:'30px'}}> </h1>
						<h1 style={{fontSize:'30px'}}>Welcome back!!</h1>
						<h2>Do your tasks with todolist app</h2>
						<p>
                        To-do lists offer a way to increase productivity, stopping you from forgetting things, 
                        <p>helps prioritise tasks, manage tasks effectively, use time wisely and improve time management as well as workflow.</p>
						</p>
						<button>Learn More</button>
					</div>
				</div>
				<div id="extra">
				<div id="cardi">
						<h3 style={{fontFamily:'inherit'}}>You can always change your plan, but only if you have one. I'm a big believer in to-do lists. It helps us break life into small steps. </h3>
						
					</div>
					<Lottie animationData={anima}/>
				</div>
				<div id="extra">
					<div id="card">
						<h3>Feeling forgetful?</h3>
						<p>Nobody is capable of remembering everything at all times. To-do lists are a useful external memory aid that give you permission to forget.</p>
						<button>Read More</button>
					</div>
					<div id="card">
						<h3>One of the most important reasons for keeping a to-do list is the organization.</h3>
						<p> Organizing your tasks with a list can make everything much more manageable and make you feel grounded</p>
						<button>Read More</button>
					</div>
					<div id="card">
						<h3>We all have those days when there are a million things to do, and we don't know how we're going to get it all done</h3>
						<p>If you record all your tasks in a to-do list, you can easily review the list and prioritize the most important tasks</p>
						<button>Read More</button>
					</div>
				</div>
				<div id="footer"><p>Copyright@2024</p>
				</div>
			</div>
		</>
	)
}
export default Home;
