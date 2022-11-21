import { useState } from 'react';
import './App.css';
import Card from './components/card/Card';

function App() {
  const[product,setProduct]=useState([{
    id:1,
    title:"MSI Anakart",
    image:"https://cdn.pixabay.com/photo/2015/05/31/10/51/technology-791031_960_720.jpg",
    info:"3.0 GHZ 3*USB 2.0",
    adet:1,
  },{
    id:2,
    title:"RAM",
    image:"https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_960_720.jpg",
    info:"16GB KINGSTON",
    adet:1,
  },{
    id:3,
    title:"Ekran Kartı",
    image:"https://cdn.pixabay.com/photo/2015/05/31/10/51/technology-791031_960_720.jpg",
    info:"Nvdia Geforce 1050",
    adet:1,
  },{
    id:4,
    title:"Monitör",
    image:"https://cdn.pixabay.com/photo/2014/09/28/11/25/imac-464737_960_720.jpg",
    info:"17' 144HZ",
    adet:1,
  }]);

  const [basket,setBasket]=useState([]);
  return (
    <div className="App">
      <h1>REACT SEPET UYGULAMASI</h1>
      <h2>Listelenen Ürünler</h2>
      <div className="urunler">
        {product.map((e,index)=>{
          return (
            <Card
              onClick={()=>{
                const arr=[...basket];
                if(arr.findIndex((ind)=>{
                  return e.id===ind.id
                })===-1){
                  arr.push(e);
                  setBasket(arr);
                }else{
                  arr.map((item)=>{
                    if(e.id===item.id){
                      return (e.adet+=1);
                    }
                    setBasket(arr)
                  })
                }
                console.log(basket)
              }}
              key={index} title={e.title} image={e.image} info={e.info}/>)
        })}
        
      </div>
      <div className="sepet">
        <h2>SEPET</h2>
        <ul className="sepet">
          {basket.map((e,index)=>{
            return <li>{e.title + "-----> "+e.info+" =>"}
              <b style={{fontSize:"17px"}}> Adet: {e.adet}</b></li>
          })}
        </ul>
        {
          basket.length>0 ? 
          <button onClick={()=>{
            setBasket([]);
          }}>Sepeti Temizle</button> : 
          <h3>Sepetinizde Ürün Bulunmamaktadır.</h3>
        }
      </div>
    </div>
  );
}

export default App;
