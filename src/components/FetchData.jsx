import React, { useEffect,useState } from 'react'
// import React,{useEffect,useState} from'react'
import{Link} from 'react-router-dom'
import axios from 'axios'

export const FetchData = ({cat}) => 
{ const[Data,setData]=useState("")
  const FetchData=async()=>{
  await axios.get(
    cat?`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=72805e7e542448479e1f9194427ea003`
    :"https://newsapi.org/v2/top-headlines?country=in&apiKey=72805e7e542448479e1f9194427ea003")
  .then((res)=>setData(res.data.articles))
}
useEffect(()=>{
  FetchData()
},[cat])
  return (
    <div className="container my-4 " style={{paddingtop:"7px",marginTop:"7px"}}><h3><u>TOP HEADLINES</u></h3>
    <div className="container d-flex justify-content-center align-items-center flex-column my-3" style={{minHeight:"100vh"}}>
      {Data?Data.map((items,index)=>(
        <>
        <div className="container my-3 p-3" style={{width:"600px",boxShadow:"2px 2px 10px silver",borderRadius:"10px"}}>
        <h5 className="my-2 p-2">{items.title}</h5>
        <div className="justify-content-center align-items-center">
        <img src={items.urlToImage} alt="mage not found" className="img-fluid" style={{width:"100%",height:"300px",objectFit:"cover"}}></img>
        </div>
        {/* / */}
        {/* <p>{items.description}</p> */}
        <p className="my-1">{items.content}</p>
        <a href={items.url} target="blank">View More</a>
        </div>
        </>
      )):"LOADING..."}
      </div></div>
  )
      }

export default FetchData