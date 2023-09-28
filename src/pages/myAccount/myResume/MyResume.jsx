import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PersonalInfo from "../personalInfo/PersonalInfo";
import { useForm } from "react-hook-form";
import { validateImage } from "../../../commonFuntions/validatedImage";
import SocialInfo from "../socialInfo/SocialInfo";
import MyExperience from "../myExperience/MyExperience";
import Skills from "../skills/Skills";
import MyProjects from "../myProjects/MyProjects";
import MyEducation from "../education/MyEducation";

const MyResume = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // states
  const [experienceFields, setExperienceField] = useState([{}]); // state for experience fields
  const [projectsFields, setProjectsField] = useState([{}]); // state for projects fields
  const [myEducationFields, setMyEducationFields] = useState([{}]); // state for education fields

  // convert string to array
  const convertStrToArray = (str) => {
    const array = str.split(" ,");
    return array;
  };
  // genarate resmue
  const handleGenarateResume = (data) => {
    const expertise = convertStrToArray(data.expertise);
    const comfortable = convertStrToArray(data.comfortable);
    const familiar = convertStrToArray(data.familiar);
    const tools = convertStrToArray(data.tools);
    const myResmeData = {
      name: data.name,
      email: data.email,
      careerObjective: data.careerObjective ? data.careerObjective : null,
      social: [
        { facebook: data.facebook },
        { github: data.github },
        { linkdin: data.linkdin },
        { twiter: data.twiter },
      ],
      skills: [
        { expertise: expertise },
        { comfortable: comfortable },
        { familiar: familiar },
        { tools: tools },
      ],
      projects: projectsFields,
      experience: experienceFields,
      education: myEducationFields,
    };
    console.log(myResmeData);
  };
  return (
    <section>
      <div className="bg-blue-500 h-10 fixed w-full top-0">
        <div className="flex items-center h-full px-4 w-4/5 mx-auto">
          <a className="btn btn-primary btn-sm rounded" href="#personal-info">
            Personal Information
          </a>
          <a className="btn btn-primary btn-sm rounded" href="#social-info">
            Social Information
          </a>
          <a className="btn btn-primary btn-sm rounded" href="#experience">
            Experience
          </a>
          <a className="btn btn-primary btn-sm rounded" href="#skills">
            Skills
          </a>
          <a className="btn btn-primary btn-sm rounded" href="#projects">
            Projects
          </a>
          <a className="btn btn-primary btn-sm rounded" href="#education">
            Education
          </a>
        </div>
      </div>

      <form
        className=" w-4/5 mx-auto mt-20"
        onSubmit={handleSubmit(handleGenarateResume)}
      >
        <PersonalInfo register={register} errors={errors}></PersonalInfo>
        <div className=" divider"></div>
        <SocialInfo register={register} errors={errors}></SocialInfo>
        <div className=" divider"></div>
        <MyExperience
          experienceFields={experienceFields}
          setExperienceField={setExperienceField}
          register={register}
          errors={errors}
        ></MyExperience>
        <div className=" divider"></div>
        <Skills register={register} errors={errors}></Skills>
        <div className=" divider"></div>
        <MyProjects
          projectsFields={projectsFields}
          setProjectsField={setProjectsField}
        ></MyProjects>
        <MyEducation
          myEducationFields={myEducationFields}
          setmyEducationFields={setMyEducationFields}
        ></MyEducation>
        <button className={` btn  w-full mt-5 btn-primary `}>
          Genarate Resume
        </button>
      </form>
    </section>
  );
};

export default MyResume;
