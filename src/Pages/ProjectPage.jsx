import { useState, useEffect } from "react"
import React from 'react'
import projectList from "../components/ProjectList";
import Projects from "../components/Projects";
import Spinner from "../components/Spinner";

const ProjectPage = () => {
  const [all, setAll] = useState(true);
  const [web, setWeb] = useState(false);
  const [android, setAndroid] = useState(false);
  const [project, setProject] = useState('all');
  const [loading, setLoading] = useState(false);

  const filterProject = (projectType) => {
    switch (projectType) {
      case 'all':
        setAll(true);
        setWeb(false);
        setAndroid(false);
        setProject('all');
        setLoading(true);
        setTimeout(() => {
          setLoading(false)
        }, 500);
        break;
      case 'web':
        setAll(false);
        setWeb(true);
        setAndroid(false);
        setProject('web');
        setLoading(true);
        setTimeout(() => {
          setLoading(false)
        }, 500);
        break;
      case 'android':
        setAll(false);
        setWeb(false);
        setAndroid(true);
        setProject('android');
        setLoading(true);
        setTimeout(() => {
          setLoading(false)
        }, 500);
        break;
      default:
        setAll(true);
        setWeb(false);
        setAndroid(false);
        setProject('all');
        setLoading(true);
        setTimeout(() => {
          setLoading(false)
        }, 500);
        break;

    }
  }



  const renderProjects = () => {
    if (!projectList || !projectList.length) {
      return null;
    }


    switch (project) {
      case 'all':
        return projectList.map((project, index) => <Projects key={index} project={project} />);
      case 'web':
        return projectList
          .filter(project => project.type === 'web')
          .map((project, index) => <Projects key={index} project={project} />);
      case 'android':
        return projectList
          .filter(project => project.type === 'android')
          .map((project, index) => <Projects key={index} project={project} />);
      default:
        return projectList.map((project, index) => <Projects key={index} project={project} />);
    }
  };

  return (
    <section className='w-screen py-[50px]' id="project">

      <div className='container mx-auto p-8
      lg:px-[100px]  '>
        <div className='text-black text-3xl  font-semibold
        lg:text-4xl '>PROJECTS</div>
        <div className='max-w-[300px] h-[1px] bg-tertiary'></div>

        <div className='w-full flex justify-end my-4 '>
          <button onClick={() => filterProject('all')} className={all ? `text-lg text-white mr-4 lg:mr-6 px-4 py-2 bg-tertiary rounded-lg ` : `text-lg  px-4 py-2 text-gray-500 mr-4 lg:mr-6 bg-none`}>All</button>
          <button onClick={() => filterProject('web')} className={web ? `text-lg text-white mr-4 lg:mr-6 px-4 py-2 bg-tertiary rounded-lg ` : `text-lg  px-4 py-2 text-gray-500 mr-4 lg:mr-6bg-none`}>Web</button>
          <button onClick={() => filterProject('android')} className={android ? `text-lg text-white  px-4 py-2 bg-tertiary rounded-lg ` : `text-lg  px-4 py-2 text-gray-500  bg-none`}>Android</button>
        </div>

        {loading ? <Spinner loading={loading} /> : renderProjects()}
      </div>



    </section>
  )
}

export default ProjectPage