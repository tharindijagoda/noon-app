import React ,{ Component,Fragment } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import Image from '../../UI/Image/Image';
import Button from '../../UI/Button/Button';
import Title from '../../UI/Title/Title';
import Favorite from '../../../pages/favorite';


class FavoriteItem extends Component{
    constructor(props){
        super(props);        
        this.deleteFavoriteItem = this.deleteFavoriteItem.bind(this);

    }

    async deleteFavoriteItem() {
        console.log("called" ,this.props.key);
        const res=  await fetch('http://localhost:8080/delete?name='+this.props.key)
        const json = await res.json()
        await Router.push('/Favorite')
        //return(json);
      }
    render(){    
        return(
           <Fragment>   
            <div className="row">
                <Title username={this.props.name}/>
                <a onClick={()=>this.deleteFavoriteItem()}><Button>fa fa-fw fa-trash</Button></a>
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
                }
            
            `}    
            </style>
            <hr/>
        </Fragment> 
    );
}}



export default FavoriteItem;