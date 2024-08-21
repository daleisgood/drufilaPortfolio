import React from 'react'
import ReactImg from '../assets/img/reactskill.png';
import JavaImg from '../assets/img/javaskill.png';
import HtmlImg from '../assets/img/htmlskill.png';
import CssImg from '../assets/img/cssskill.png';
import JavascriptImg from '../assets/img/javascriptskill.png';
import TailwindImg from '../assets/img/tailwindskill.png';
import BootstrapImg from '../assets/img/bootstrapskill.png';
import FirebaseImg from '../assets/img/firebaseskill.png';
import GitImg from '../assets/img/gitskill.png';
import FigmaImg from '../assets/img/figmaskill.png'



const Skill = ({ skill}) => {

    const getImg = () => {


        if (skill.skill.toLowerCase() === 'react') return ReactImg
        else if (skill.skill.toLowerCase() === 'html') return HtmlImg
        else if (skill.skill.toLowerCase() === 'css') return CssImg
        else if (skill.skill.toLowerCase() === 'javascript') return JavascriptImg
        else if (skill.skill.toLowerCase() === 'tailwind') return TailwindImg
        else if (skill.skill.toLowerCase() === 'bootstrap') return BootstrapImg
        else if (skill.skill.toLowerCase() === 'java') return JavaImg
        else if (skill.skill.toLowerCase() === 'firebase') return FirebaseImg
        else if (skill.skill.toLowerCase() === 'git') return GitImg
        else if (skill.skill.toLowerCase() === 'figma') return FigmaImg

    }


    return (
        <div className='inline-block '>
            <div className='flex justify-center items-center mx-20'>
                <img src={getImg()} alt={skill} className='w-[85px] h-[85px] object-contain mx-6' />
                <div className=' text-white text-3xl'>{skill ? skill.skill : null}</div>
            </div>

        </div>
    )
}

export default Skill