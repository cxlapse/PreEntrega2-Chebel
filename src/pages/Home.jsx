import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { useEffect, useState } from 'react';
import axios from 'axios';


const Home = () => {
    const [products,  setProducts] = useState ([]);
        useEffect(() => {
            axios
            .get('https://dummyjson.com/products')
            .then((res) => {
            setProducts(res.data.products);
            }).catch(error => console.log(error));
            }, [] );
    return(
       <ItemListContainer products={products} />
    )
}

export default Home