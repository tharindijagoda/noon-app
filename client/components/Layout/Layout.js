import React,{ Fragment } from 'react';
import Navigation from './Navigation/Navigation'

const layout = (props)=> (
    <Fragment>
            <main>
                 {props.children}
            </main>
            <Navigation />
    </Fragment>
);

export default layout;