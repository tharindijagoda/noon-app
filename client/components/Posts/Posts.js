import React from 'react';
import Post from './Post/Post';

const posts = (props)=>(
    <div className="row ">
       
            {props.postsData.map(ctrl=>(
                <Post 
                    key={ctrl.username} 
                    name={ctrl.username}
                    image={ctrl.image}/>
            ))}
            
   
        <style jsx>
        {`
            div{
                width: 100%;
                display: flex;
                flex-flow: column;
                
                box-shadow: 0 2px 1px #ccc;
                margin: auto;
                
                margin-top:20px;
                padding-top:40px;
            }

            @media(min-width:1000px )and (min-height: 700px){
                    div{
                        width: 700px;
                        height: 600px;
                    }
                }

                @media(min-width:500px )and (min-height: 401px){
                    div{
                        width: 450px;
                        height: 400px;
                    }
                }

                @media(min-width:500px )and (min-height: 400px){
                    div{
                        width: 350px;
                        height: 300px;
                    }
                }
        
        `}    
        </style>
    </div>
);



export default posts;