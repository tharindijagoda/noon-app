import React,{ Fragment } from 'react';
import Link from 'next/link';


const navigationItem = ( props ) => (
    <Fragment>
        <li>
            <Link href={props.link}>
                <a><i className={props.children}></i></a>
            </Link>
        </li>
      <style jsx>
      {`
      li{
        margin: 10px 0;
        box-sizing: border-box;
        display: block;
        width: 100%;
        
      }
      i{
            float: center;
            text-align: center;
            padding: 12px;
            color: white;
            text-decoration: none;
            font-size: 30px;
      }
    `}    
      </style>
      </Fragment>
);

export default navigationItem;