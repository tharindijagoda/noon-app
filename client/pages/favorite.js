import Layout from '../components/Layout/Layout';
import FavoriteItems from '../components/FavoriteItems/FavoriteItems';
import fetch from 'isomorphic-unfetch';



const Favorite = (props) => {
    
    console.warn('server Favorite data : ' , props.json);
    return <div className="container">
        <div className="row">
            <div className="col-sm">
                <Layout>
                    <FavoriteItems postsData={props.json} />
                </Layout>
            </div>
        </div>
    </div>


}

Favorite.getInitialProps = async ({req}) => {

     const res=await fetch('http://localhost:8080/favorite')
     const json = await res.json()
     
    return { json } 

}


export default Favorite;