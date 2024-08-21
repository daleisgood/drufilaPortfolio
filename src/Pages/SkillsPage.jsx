import React from 'react';
import SkillList from '../components/SkillList';
import Skill from '../components/Skill';



const SkillsPage = () => {


    return (
        <section className='w-screen h-[400px] py-[20px] flex items-center' id='skill'>

            <div className='bg-secondary  flex  my-20 p-10 select-none'>
             
                <div className='whitespace-nowrap   animate-infiniteSlide flex '>
                    {SkillList.map((skill, index) => (
                        <Skill key={index} skill={skill} />
                    ))}
                </div>
                <div className='whitespace-nowrap   animate-infiniteSlide flex '>
                    {SkillList.map((skill, index) => (
                        <Skill key={index} skill={skill} />
                    ))}
                </div>
                <div className='whitespace-nowrap   animate-infiniteSlide flex '>
                    {SkillList.map((skill, index) => (
                        <Skill key={index} skill={skill} />
                    ))}
                </div>
            </div>



        </section>
    )
}

export default SkillsPage