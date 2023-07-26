import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Search from '../Components/Search';
import MainPost from '../Components/MainPost';
import Blogs from '../Components/Blogs';
import Footer from '../Components/Footer';

import GlobalAPI from '../Services/GlobalAPI'

function Home() {
  const [posts, setPosts] = useState([]);
  const [images, setImages]= useState([]);
  const [blogs,setBlogs]= useState([]);
  const [users, setUsers]= useState([]);
  const getImages = () => {
    GlobalAPI.getCoverImage.then(res=>{
      // console.log(res.data);
      const response = res.data.map(item=>({
        id:item.id,
        thumbnail:item.url
      }));
      setImages(response);
    })
  }
  const getBlogs = () => {
    GlobalAPI.getPost.then(res=>{
      // console.log(res.data);
      const response = res.data.map(item=>({
        id:item.id,
        title:item.title,
        userId:item.userId,
        body:item.body
      }));
      setBlogs(response);
    });
  }
  const getUsers = () => {
    GlobalAPI.getUsers.then(res=>{
      console.log(res.data);
      const response = res.data.map(item=>({
        userId: item.id,
        name:item.name,
        email:item.email
      }));
      setUsers(response);
    })
  }
  useEffect(()=>{
    getImages();
    getBlogs();
    getUsers();
  },[]);

  useEffect(()=>{
    const blogObjectArray=[];
    for(let i=0;i<blogs.length;i++){
      let blogObject ={};
      if(images?.length>0 && blogs[i].id === images[i].id){
        const user = users.filter(u=>u.userId===blogs[i].userId);
        blogObject.id=blogs[i].id;
        blogObject.title=blogs[i].title;
        blogObject.userId=blogs[i].userId;
        blogObject.userName=user[0].name;
        blogObject.userEmail=user[0].email;
        // console.log(blogObject.user)
        blogObject.body=blogs[i].body;
        blogObject.image=images[i].thumbnail;
        // console.log(images[i].thumbnail);
        blogObjectArray.push(blogObject);
      }
    }
    setPosts(blogObjectArray);
  },[blogs,images,users])
  return (
    <div>
        <Header />
        <Search />
        {
          posts.length > 0 && 
          <MainPost post={posts[0]}/>
        }
        <Blogs />
        <Footer />
    </div>
  )
}

export default Home
