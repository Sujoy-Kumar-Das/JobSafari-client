import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { errorMessageHandeler } from "../../../commonFuntions/errorMessageHandeler";

const Skills = ({
  expertiseFields,
  setExpertiseFields,
  comfortableFields,
  setComfortableFields,
  familiarFields,
  setFamiliarFields,
  toolsFields,
  setToolsFields,
}) => {
  // handle delete skill fields
  const handleDeleteField = (arrary, setArray, index) => {
    if (arrary.length === 1) {
      return errorMessageHandeler("You cant delete all fields.");
    } else {
      const updatedFields = [...arrary];
      updatedFields.splice(index, 1);
      setArray(updatedFields);
    }
  };
  const handleOnchangelValue = (arrary, setArray, value, index) => {
    const newFields = [...arrary];
    newFields[index] = value;
    setArray(newFields);
  };
  return (
    <div id="skills">
      <h1 className=" text-3xl lg:text-4xl font-bold text-secondary mb-5">
        Skills
      </h1>
      {/* experties dynamic field start */}

      <div>
        <div className=" flex justify-between items-center">
          <h1 className=" text-2xl font-bold text-secondary mb-5">Expertise</h1>
          <button
            onClick={() => {
              setExpertiseFields([...expertiseFields, ""]);
            }}
            type="button"
            className=" btn btn-secondary btn-xs"
          >
            +
          </button>
        </div>

        {expertiseFields.map((field, index) => (
          <div key={index} className=" flex items-center gap-x-2">
            <input
              type="text"
              placeholder={"Enter your experties technologys."}
              className={` input input-bordered w-full my-2 `}
              onChange={(e) => {
                handleOnchangelValue(
                  expertiseFields,
                  setExpertiseFields,
                  e.target.value,
                  index
                );
              }}
            />
            <button
              type="button"
              onClick={() =>
                handleDeleteField(expertiseFields, setExpertiseFields, index)
              }
              className=" btn btn-xs btn-error  rounded text-white"
            >
              <AiOutlineMinus />
            </button>
          </div>
        ))}
      </div>
      {/* experties dynamic field end */}

      {/* comfortable dynamic field start */}
      <div className=" my-5">
        <div className=" flex justify-between items-center">
          <h1 className=" text-2xl font-bold text-secondary mb-5">
            Comfortable
          </h1>
          <button
            onClick={() => {
              setComfortableFields([...comfortableFields, ""]);
            }}
            type="button"
            className=" btn btn-secondary btn-xs"
          >
            +
          </button>
        </div>

        {comfortableFields.map((field, index) => (
          <div key={index} className=" flex items-center gap-x-2">
            <input
              type="text"
              placeholder={"Enter your comfortable technologys."}
              className={` input input-bordered w-full my-2 `}
              onChange={(e) => {
                handleOnchangelValue(
                  comfortableFields,
                  setComfortableFields,
                  e.target.value,
                  index
                );
              }}
            />
            <button
              type="button"
              onClick={() =>
                handleDeleteField(
                  comfortableFields,
                  setComfortableFields,
                  index
                )
              }
              className=" btn btn-xs btn-error  rounded text-white"
            >
              <AiOutlineMinus />
            </button>
          </div>
        ))}
      </div>
      {/* comfortable dynamic field end */}

      {/* familiar dynamic field start */}

      <div>
        <div className=" flex justify-between items-center">
          <h1 className=" text-2xl font-bold text-secondary mb-5">Familiar</h1>
          <button
            onClick={() => {
              setFamiliarFields([...familiarFields, ""]);
            }}
            type="button"
            className=" btn btn-secondary btn-xs"
          >
            +
          </button>
        </div>

        {familiarFields.map((field, index) => (
          <div key={index} className=" flex items-center gap-x-2">
            <input
              type="text"
              placeholder={"Enter your familiar technology."}
              className={` input input-bordered w-full my-2 `}
              onChange={(e) => {
                handleOnchangelValue(
                  familiarFields,
                  setFamiliarFields,
                  e.target.value,
                  index
                );
              }}
            />
            <button
              type="button"
              onClick={() =>
                handleDeleteField(familiarFields, setFamiliarFields, index)
              }
              className=" btn btn-xs btn-error  rounded text-white"
            >
              <AiOutlineMinus />
            </button>
          </div>
        ))}
      </div>

      {/* fmailiar dynamic field end */}

      {/* tools dynamic field start */}

      <div className=" my-5">
        <div className=" flex justify-between items-center">
          <h1 className=" text-2xl font-bold text-secondary mb-5">Tools</h1>
          <button
            onClick={() => {
              setToolsFields([...toolsFields, ""]);
            }}
            type="button"
            className=" btn btn-secondary btn-xs"
          >
            +
          </button>
        </div>

        {toolsFields.map((field, index) => (
          <div key={index} className=" flex items-center gap-x-2">
            <input
              type="text"
              placeholder={"Enter which tools you used."}
              className={` input input-bordered w-full my-2 `}
              onChange={(e) => {
                handleOnchangelValue(
                  toolsFields,
                  setToolsFields,
                  e.target.value,
                  index
                );
              }}
            />
            <button
              type="button"
              onClick={() =>
                handleDeleteField(toolsFields, setToolsFields, index)
              }
              className=" btn btn-xs btn-error  rounded text-white"
            >
              <AiOutlineMinus />
            </button>
          </div>
        ))}
      </div>

      {/* tools dynamic field end */}
    </div>
  );
};

export default Skills;
