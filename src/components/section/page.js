import React from 'react';
import './page.css';

function Page(){
    return(
        <div>
            <img className="logo" src="react_logo-512.webp"/>
            <div className="content">
                <h1>Fun Facts About React</h1>
                <ul>
                    <li><h4>Was first released in 2013</h4></li>
                    <li><h4>Has Hell Over 100K Stars on GITHUB</h4></li>
                    <li><h4>is mantained by FaceBook</h4></li>
                    <li><h4>Orignally Created By Jordan Walke</h4></li>
                    <li><h4>Powers thousands of enterprise apps, including<br/>mobile apps</h4></li>
                </ul>

            </div>
        </div>
    )
}
export default Page;