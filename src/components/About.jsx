import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {

    const downloadPDF = () => {
        const pdfURL = ' https://drive.google.com/file/d/1x2uNc3bj1DlCU4bvrt1xDL4LlR3aF3mn/view?usp=drivesdk';
        window.open(pdfURL, '_blank');
    
      };

    useEffect(() => {
        AOS.init({ duration: 1000 })
    })
    
    return (
        <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>

                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    I embarked my journey as a B.Tech Computer Science & Engineering student at Jaypee Institute of Information Technology in 2021. I'm a dedicated Full Stack Web Developer. My passion lies in leveraging Java skills to create innovative software. I develop intuitive web interfaces using HTML, Tailwind CSS, and JavaScript, and I'm proficient in frameworks like Express.js, Node.js, and React.js. My problem-solving skills and knowledge of C++ enable me to optimize code efficiency. Additionally, my writing skills complement my technical abilities, allowing me to communicate complex concepts effectively. I thrive in collaborative environments and am highly motivated to deliver outstanding results. Let's connect and collaborate to bring your ideas to life!
                </p>
                <br />
                
                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>

                    <AiOutlineCloudDownload />
                    <button onClick={downloadPDF}>Download CV</button>
                </div>
            </div>
        </div>
    )
}

export default About