import React from 'react';
import img from '../assets/page1/img1.jpg';
import img2 from '../assets/page1/img2.png';
import img3 from '../assets/page1/img3.png';
import img4 from '../assets/page1/img4.png';
import main from '../assets/page1/main.png';
import {motion} from 'framer-motion';


    const animation = {
        animationOne:{
            scale: [1.1, 1, 1.1], 
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
            <motion.img src={img3}
                variants={animation}
                whileHover="animationTwo"
                className='img' 
                style={{height:"200px", width:"300px", position: "absolute", left: "-150px", top: "150px"}}
            />
            <motion.img src={img4}
                variants={animation}
                whileHover="animationOne"
                className='img' 
                style={{height:"200px", width:"300px", position: "absolute", left: "250px", top: "250px"}}
            />
            <motion.img 
                variants={animation}
                whileHover="animationTwo" 
                src={img2} alt="img3" 
                className='img' 
                style={{height:"200px", width:"200px", position: "absolute", right: "40px", top: '150px'}}
            />

            <motion.a
             href="#" 
             whileHover={{scale: 1.2, transition: { duration: 1 }}} 
             whileTap={{ scale: 0.9 }}
             className='bg-success h2 text-decoration-none text-white p-2 rounded' 
             style={{display:"inline-block"}}>
                <i class="bi bi-person-plus-fill"> </i>S'inscrire
            </motion.a> 
        </div>
    )
}

export default Page;