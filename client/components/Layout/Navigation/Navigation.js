
import { Fragment } from 'react';
import Head from 'next/head';
import Favorite from '../../../pages/favorite';
import NavigationItem from './NavigationItem/NavicationItem';


const navigation = (props)=> (
   <Fragment> 
       <Head>
           <title>noon</title>
           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

       </Head>
       
       <ul className="nav navbar-nav">
        <NavigationItem link="/">fa fa-fw fa-home</NavigationItem>
        <NavigationItem link="/Favorite">fa fa-fw fa-heart</NavigationItem>
       </ul>
     
     <style jsx>
                {`
                ul{
                    height: 56px;
                    width: 100%;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    background-color:#FF69B4;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 20px;
                    box-sizing: border-box;
                    z-index: 90;
                    flex-flow: row;
                    text-align: center ! important;
                }
                @media (min-width: 600px) {
                    ul {
                        top: 0;
                    }
                }
                `}    
                </style>
    </Fragment> 
    
  
);

export default navigation;