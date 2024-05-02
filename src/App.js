import { useEffect, useState } from "react";

import axios from  'axios'



function App(){


//Initializing default configuration
  let api= axios.create({
    baseURL:'https://fakestoreapi.com'
  })


  useEffect(
    ()=>{
      getProducts();
      addProduct();
      updateProduct();
      deleteProduct()
  
    },[]
  )
  

  //get profucts data
  async function getProducts(){
   let res = await  api.get('/products')

   console.log(res.data)
  }

  //add new product
  async function addProduct(){
    let res = await  api.post('/products',
    {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    })
    console.log(res.data)
   }


   //update product

   async function updateProduct(){
    let res = await  api.put('/products/14',
    {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    })
    console.log(res.data)
   }


   //delete product
   async function deleteProduct(){
    let res = await  api.delete('/products/10')
 
    console.log(res.data)
   }

  return(
    <>
    <h1>AXIOS Libray Integration in React</h1>
    </>
  )

}

export default App