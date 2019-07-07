import React ,{ Component ,Fragment } from 'react';
import Link from 'next/link';
import Image from '../../UI/Image/Image';
import Button from '../../UI/Button/Button';
import Title from '../../UI/Title/Title';
import Router from 'next/router';

class Post extends Component{
    constructor(props){
        super(props);        
        this.addFavoriteItem = this.addFavoriteItem.bind(this);

    }

    async addFavoriteItem() {
        console.log("called" ,this.props.key);
        const res=  await fetch('http://localhost:8080/add?name='+this.props.key)
        // const json = await res.json()
        // return(json);
      }
    render(){
        
        return(
            <Fragment> 
            <div className="row">
                <Title username={this.props.name}/>
                <a onClick={()=>this.addFavoriteItem()}><Button>fa fa-fw fa-heart</Button></a>
            </div>
            <div className="row">
                <Image image={this.props.image}/>  
            </div>   
            
        
            <style jsx>
            {`
                img {
                    max-width: 100%;
                    height: auto;
                }
                a{
                    position: absolute;
                    right:20px;
                    text-align:left;
                }
                
            
            `}    
            </style>
            <hr/>
            </Fragment> 
    );
}}



export default Post;