
import Layout from '../components/Layout/Layout';
import Posts from '../components/Posts/Posts';
import fetch from 'isomorphic-unfetch';



const Home = (props) => {
    
    console.warn('server data : ' , props.json);
    return  <Layout><div className="container">
        
               
                    <Posts postsData={props.json} />
                
    </div></Layout>


}

Home.getInitialProps = async ({req}) => {

     const res=await fetch('http://localhost:8080/all')
     const json = await res.json()
     
    return { json } 
}


export default Home;