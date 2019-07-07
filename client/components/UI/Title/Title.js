const title = (props)=>(
    <div className="title">   
        <img src="https://homepages.cae.wisc.edu/~ece533/images/tulips.png" alt="Avatar" /> 
        <h6>{props.username}</h6>
        <style jsx>
        {`   
            h6{
                color: blue;
                padding-left: 10px;
                padding-right: 5px;
                padding-top: 5px;
            }       
            img{
                vertical-align: middle;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                width: 40px;
                
            }
            .title{
                padding-left: 10px;
                padding-right: 10px;
                padding-top: 5px;
                padding-bottom: 5px;
                display: flex;
            }
        `}
        </style>
        
    </div>
);

export default title;