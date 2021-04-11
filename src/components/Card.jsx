import React from 'react';

function Card(props){
    return(
        <div class="card">
            <div class="content">
            <h2>{props.number}</h2>
             <h3>{props.title}</h3>
             <p>{props.details}</p>
             <a href="#">{props.link}</a>
            </div>
        </div>    
    );
}

export default Card;