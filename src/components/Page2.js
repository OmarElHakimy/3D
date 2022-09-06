import React from 'react';
import img from '../assets/page2/img.jpg';
import img1 from '../assets/page2/img1.png';
import img2 from '../assets/page2/img2.png';
import img3 from '../assets/page2/img3.png';
import main from '../assets/page2/main.png';
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
            <img src={img} alt="img" className='img' style={{height:"400px", width:"800px", position: "relative"}}/>
            <motion.img src={img1}
            variants={animation}
            whileHover="animationOne"
                className='img' 
                style={{height:"200px", width:"200px", position: "absolute", left: "-150px", top: "200px"}}
            />
            <motion.img src={img2}
            variants={animation}
            whileHover="animationTwo"
            className='img' 
            style={{height:"200px", width:"300px", position: "absolute", left: "150px", top: "220px"}}
            />
            <motion.img src={img3}
            variants={animation}
            whileHover="animationTwo"
            className='img' 
            style={{height:"200px", width:"300px", position: "absolute", left: "400px", top: "200px"}}
            />
            <motion.a 
            href="#" 
            whileHover={{scale: 1.2, transition: { duration: 1 }}} 
            whileTap={{ scale: 0.9 }} 
            className='bg-success h2 text-decoration-none text-white p-2 rounded'  
            style={{display:"inline-block"}}>
                <i class="bi bi-lightbulb"> </i>Soyez à Jour
            </motion.a> 
        </div>
    )
}

export default Page;