import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { successMessage } from "../../../commonFuntions/successMessage";
import { errorMessageHandeler } from "../../../commonFuntions/errorMessageHandeler";
import MyExperience from "./myExperience/MyExperience";
import MyProjects from "./myProjects/MyProjects";
import MyEducation from "./education/MyEducation";
import PersonalInfo from "./personalInfo/PersonalInfo";
import Skills from "./skills/Skills";
import SocialInfo from "./socialInfo/SocialInfo";
import { AuthContextProvider } from "../../../contexts/AuthContext/AuthContext";
import useLoadData from "../../../hooks/useLoadData";
import Loader from "../../shared/loaders/Loader";
const EditResume = () => {
  const { user } = useContext(AuthContextProvider); // auth context provider
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
    const array = str.split(",");
    return array;
  };
  // load resume url
  const url = `http://localhost:5000/my-resumes?email=${user.email}`;

  const [isLoading, data] = useLoadData("my-resumes", url);
  // genarate resmue
  const handleGenarateResume = async (data) => {
    const expertise = convertStrToArray(data.expertise);
    const comfortable = convertStrToArray(data.comfortable);
    const familiar = convertStrToArray(data.familiar);
    const tools = convertStrToArray(data.tools);
    const myResmeData = {
      name: data.name,
      email: data.email,
      address: data.address,
      mobile: data.mobile,
      careerObjective: data.careerObjective ? data.careerObjective : null,
      social: [
        { title: "facebook", link: data.facebook },
        { title: "github", link: data.github },
        { title: "linkdin", link: data.linkdin },
        { title: "twiter", link: data.twiter },
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
    const res = await fetch(`http://localhost:5000/post-my-resume`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myResmeData),
    });
    const postResumeData = await res.json();
    if (!postResumeData.success) {
      errorMessageHandeler(postResumeData.message);
      reset();
    } else {
      successMessage(postResumeData.message);
    }
  };
  if (isLoading) {
    return <Loader></Loader>;
  }
  console.log(data.resume);
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
        <PersonalInfo
          resume={data.resume}
          register={register}
          errors={errors}
        ></PersonalInfo>
        <div className=" divider"></div>
        <SocialInfo
          resume={data.resume}
          register={register}
          errors={errors}
        ></SocialInfo>
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

export default EditResume;
