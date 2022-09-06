import React from 'react';
import img from '../assets/page4/img.png';
import img2 from "../assets/page4/img2.png";
import img3 from '../assets/page4/img3.png';
import img4 from "../assets/page4/img4.png";
import main from '../assets/page4/main.png';
import {motion} from 'framer-motion';

const animation = {
    animationOne:{
        scale: [1.1, 0.9, 1.1], 
        transition: {scale: {repeat: Infinity, duration: 1}} 
    },
    animationTwo:{
        x:[-10, 10, -10],
        transition:{
            x:{
                repeat: Infinity,
                duration: 0.8,
            }
        }
    }
}

const Page = () => {
    return (
        <div className='container'>
            <img src={main} alt="img" className='main' style={{height:"300px", width:"600px"}}/>
            <img src={img} alt="img" className='img' style={{height:"300px", width:"600px", position: "relative"}}/>
            <motion.img src={img4}
                variants={animation}
                whileHover="animationTwo"
                className='img' 
                style={{height:"200px", width:"400px", position: "absolute", left: "-300px", top: "100px"}}
            />
            <motion.img src={img2}
                variants={animation}
                whileHover="animationOne"
            className='img' 
            style={{height:"200px", width:"300px", position: "absolute", right: "-200px", top: "100px"}}
            />
            <motion.img src={img3}
                variants={animation}
                whileHover="animationOne"
            className='img' 
            style={{height:"200px", width:"300px", position: "absolute", right: "-200px", top: "-50px"}}
            />
            <motion.a 
            href="#" 
            whileHover={{scale: 1.2, transition: { duration: 1 }}} 
            whileTap={{ scale: 0.9 }} 
            className='bg-success h2 text-decoration-none text-white p-2 rounded' 
            style={{display:"inline-block"}}>
                <i class="bi bi-share"> </i>Partager Avec Vos Amis
            </motion.a> 
        </div>
    )
}

export default Page;