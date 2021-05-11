import React , {useEffect, useState} from 'react';
import axios from 'axios';

import TopMenu from '../TopMenu/TopMenu';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import OnTop from '../OnTop/OnTop';
import Search from '../Search/Search';

const Home = () => {
    const [data , setData] = useState([])

        useEffect(() => {
            async function getData(){
                let response = await axios.get('https://apitaipham.herokuapp.com/getalldata');
                console.log(response.data);
                setData(response.data)
            }
            getData()
        }, []);
        
        async function SearchProduct(q){
            let response = await axios.post('https://apitaipham.herokuapp.com/search' , {query : q})
            setData(response.data);
        }

        return (
            <div>
                <TopMenu/>
                <Header/>
                <Search search={SearchProduct}/>
                <div className="container">
                    <div className="row">
                    {
                        data.map((item, index) =>
                            <Content key={index} title={item.Name} id={item._id} image={item.Image} desc={item.Address}/>
                        )
                    }
                    </div>
                </div>
                <OnTop/>
                <Footer copyright="Copyright © Your Website 2020"/>
            </div>
        );
    
}

export default Home;
