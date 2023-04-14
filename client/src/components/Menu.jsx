import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"

const Menu = ({cat}) => {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await axios.get(`/posts/?cat=${cat}`);
            setPosts(res.data);
        } catch(err) {
            console.log(err);
        }
        };
        fetchData();
    }, [cat]);


  //  const posts = [
    //    {
    //        id: 1,
    //        title: "Lorem ipsum dolor sit amet consectetur ad",
    //        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //        img: "https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    //    },
    //    {
    //        id: 2,
    //        title: "Lorem ipsum dolor sit amet consectetur ad",
    //        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //        img: "https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //    },
    //    {
    //        id: 3,
    //        title: "Lorem ipsum dolor sit amet consectetur ad",
    //        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //        img: "https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //    },
    //    {
    //        id: 4,
    //        title: "Lorem ipsum dolor sit amet consectetur ad",
    //        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //        img: "https://images.pexels.com/photos/21787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //    },

  //  ];


 

    return (

        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={`../upload/${post?.img}`} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    );

};

export default Menu;