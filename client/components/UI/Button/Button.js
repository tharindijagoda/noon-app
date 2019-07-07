const button = (props)=>(
    <div>
        <i className={props.children}></i>
        <style jsx>
        {`
           
        i{
            float: center;
            text-align: center;
            padding: 12px;
            color: grey;
            opacity: 0.9;
            text-decoration: none;
            font-size: 30px;
            }
        `}
        </style>
    </div>
);

export default button;