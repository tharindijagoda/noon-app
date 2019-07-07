

const image = (props)=>(
    <div>
        <img src={props.image} alt="" />
        <style jsx>
        {`
           
            img {
                max-width: 100%;
                height: auto;
            }
        `}
        </style>
    </div>
);

export default image;