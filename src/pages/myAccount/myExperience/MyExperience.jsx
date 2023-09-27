import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlusCircle } from "react-icons/ai";
import { errorMessageHandeler } from "../../../commonFuntions/errorMessageHandeler";

const MyExperience = ({ experienceFields, setExperienceField }) => {
  //   handle increse experience field
  const handelExperienceField = () => {
    setExperienceField([...experienceFields, { title: "", description: "" }]);
  };

  //   handle delete experience field
  const handleDeleteExperienceField = (id ) => {
    const fieldLength = experienceFields.length;
    if (fieldLength == 1) {
      return errorMessageHandeler("You can't delete all requirments fields.");
    } else {
      const newInputValus = [...experienceFields];
      newInputValus.splice(id, 1);
      setExperienceField(newInputValus);
    }
  };

  // handle change field data
  const handleChange = (value, index, fieldKey) => {
    const updatedFields = [...experienceFields];
    updatedFields[index][fieldKey] = value;
    setExperienceField(updatedFields);
  };
  return (
    <>
      <div id="experience" className=" flex justify-between items-center mb-5">
        <h1 className=" text-3xl lg:text-4xl font-bold text-secondary ">
          Experience
        </h1>
        <button
          onClick={handelExperienceField}
          type="button"
          className=" btn btn-sm btn-primary rounded font-extrabold text-center"
        >
          <AiOutlinePlusCircle />
        </button>
      </div>

      {/* map experienceFields start */}

      {experienceFields.map((experienceField, index) => (
        <div
          key={index}
          className="form-control border p-3 rounded text-white mb-5"
        >
          <div className=" flex justify-end">
            <button
              type="button"
              onClick={() => handleDeleteExperienceField(index)}
              className=" btn btn-xs btn-error rounded text-white"
            >
              <AiOutlineMinus />
            </button>
          </div>
          <label className="label">Experience Title</label>
          <input
            type="text"
            placeholder="Enter Your Experience Title"
            onChange={(e) => handleChange(e.target.value, index, "title")}
            className={` text-black   input input-bordered  mb-3`}
          />
          <label className="label">Experience Description</label>
          <textarea
            className="textarea textarea-bordered text-black"
            placeholder="Enter Your Experience Description"
            onChange={(e) => handleChange(e.target.value, index, "description")}
          ></textarea>
        </div>
      ))}

      {/* map experienceFields end */}
    </>
  );
};

export default MyExperience;
