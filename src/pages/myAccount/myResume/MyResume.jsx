import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PersonalInfo from "../personalInfo/PersonalInfo";
import { useForm } from "react-hook-form";
import { validateImage } from "../../../commonFuntions/validatedImage";
import SocialInfo from "../socialInfo/SocialInfo";
import MyExperience from "../myExperience/MyExperience";
import Skills from "../skills/Skills";

const MyResume = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // states
  const [experienceFields, setExperienceField] = useState([{}]); // state for experience fields
  const [expertiseFields, setExpertiseFields] = useState([""]);
  const [comfortableFields, setComfortableFields] = useState([""]);
  const [familiarFields, setFamiliarFields] = useState([""]);
  const [toolsFields, setToolsFields] = useState([""]);
  // genarate resmue
  const handleGenarateResume = (data) => {
    // console.log(data);
    console.log(familiarFields)
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
        {/* <PersonalInfo register={register} errors={errors}></PersonalInfo>
        <div className=" divider"></div>
        <SocialInfo register={register} errors={errors}></SocialInfo>
        <div className=" divider"></div>
        <MyExperience
          experienceFields={experienceFields}
          setExperienceField={setExperienceField}
          register={register}
          errors={errors}
        ></MyExperience>
        <div className=" divider"></div> */}
        <Skills
          expertiseFields={expertiseFields}
          setExpertiseFields={setExpertiseFields}
          comfortableFields={comfortableFields}
          setComfortableFields={setComfortableFields}
          familiarFields={familiarFields}
          setFamiliarFields={setFamiliarFields}
          toolsFields={toolsFields}
          setToolsFields={setToolsFields}
        ></Skills>
        <button className={` btn  w-full mt-5 btn-primary `}>
          Genarate Resume
        </button>
      </form>
    </section>
  );
};

export default MyResume;
