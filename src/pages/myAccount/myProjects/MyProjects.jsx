import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlusCircle } from "react-icons/ai";
import { errorMessageHandeler } from "../../../commonFuntions/errorMessageHandeler";

const MyProjects = ({ projectsFields, setProjectsField }) => {
  //   handle increse experience field
  const handelExperienceField = () => {
    setProjectsField([...projectsFields, { name: "", description: "" }]);
  };

  //   handle delete experience field
  const handleDeleteExperienceField = (id) => {
    const fieldLength = projectsFields.length;
    if (fieldLength == 1) {
      return errorMessageHandeler("You can't delete all requirments fields.");
    } else {
      const newInputValus = [...projectsFields];
      newInputValus.splice(id, 1);
      setProjectsField(newInputValus);
    }
  };

  // handle change field data
  const handleChange = (value, index, fieldKey) => {
    const updatedFields = [...projectsFields];
    updatedFields[index][fieldKey] = value;
    setProjectsField(updatedFields);
  };
  return (
    <>
      <div id="projects" className=" flex justify-between items-center mb-5">
        <h1 className=" text-3xl lg:text-4xl font-bold text-secondary ">
          Projects
        </h1>
        <button
          onClick={handelExperienceField}
          type="button"
          className=" btn btn-sm btn-primary rounded font-extrabold text-center"
        >
          <AiOutlinePlusCircle />
        </button>
      </div>

      {/* map projectsFields start */}

      {projectsFields.map((experienceField, index) => (
        <div
          key={index}
          className="form-control border p-3 rounded text-white mb-5"
        >
          <div className=" flex justify-between items-center">
            <h1 className=" text-2xl  font-bold text-secondary ">
              Project {index + 1}
            </h1>
            <button
              type="button"
              onClick={() => handleDeleteExperienceField(index)}
              className=" btn btn-xs btn-error rounded text-white"
            >
              <AiOutlineMinus />
            </button>
          </div>
          <label className="label text-secondary">Projects Title</label>
          <input
            type="text"
            placeholder="Enter Your Experience name"
            onChange={(e) => handleChange(e.target.value, index, "name")}
            className={` text-black   input input-bordered  mb-3`}
          />
          <label className="label text-secondary">Projects Description</label>
          <textarea
            className="textarea textarea-bordered text-black"
            placeholder="Enter Your Experience Description"
            onChange={(e) => handleChange(e.target.value, index, "description")}
          ></textarea>
        </div>
      ))}

      {/* map projectsFields end */}
    </>
  );
};

export default MyProjects;
