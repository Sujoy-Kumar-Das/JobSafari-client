import React from "react";
import { AiOutlineMinus, AiOutlinePlusCircle } from "react-icons/ai";
import { errorMessageHandeler } from "../../../../commonFuntions/errorMessageHandeler";

const MyEducation = ({ myEducationFields, setmyEducationFields }) => {
  //   handle increse experience field
  const handelEducationField = () => {
    setmyEducationFields([
      ...myEducationFields,
      { name: "", description: "", passingYear: "", result: "" },
    ]);
  };

  //   handle delete experience field
  const handleDeleteEducationField = (id) => {
    const fieldLength = myEducationFields.length;
    if (fieldLength == 1) {
      return errorMessageHandeler("You can't delete all requirments fields.");
    } else {
      const newInputValus = [...myEducationFields];
      newInputValus.splice(id, 1);
      setmyEducationFields(newInputValus);
    }
  };

  // handle change field data
  const handleChange = (value, index, fieldKey) => {
    const updatedFields = [...myEducationFields];
    updatedFields[index][fieldKey] = value;
    setmyEducationFields(updatedFields);
  };
  return (
    <>
      <div id="education" className=" flex justify-between items-center mb-5">
        <h1 className=" text-3xl lg:text-4xl font-bold text-secondary ">
          Education
        </h1>
        <button
          onClick={handelEducationField}
          type="button"
          className=" btn btn-sm btn-primary rounded font-extrabold text-center"
        >
          <AiOutlinePlusCircle />
        </button>
      </div>

      {/* map myEducationFields start */}

      {myEducationFields.map((myEducationField, index) => (
        <div
          key={index}
          className="form-control border p-3 rounded text-white mb-5"
        >
          <div className=" flex justify-end">
            <button
              type="button"
              onClick={() => handleDeleteEducationField(index)}
              className=" btn btn-xs btn-error rounded text-white"
            >
              <AiOutlineMinus />
            </button>
          </div>
          <label className="label text-secondary">Degree Name</label>
          <input
            type="text"
            placeholder="Enter Your Experience Title"
            onChange={(e) => handleChange(e.target.value, index, "title")}
            className={` text-black   input input-bordered  mb-3`}
          />

          <label className="label text-secondary">Passing Year</label>
          <input
            type="number"
            placeholder="Enter Your Degree Name."
            onChange={(e) => handleChange(e.target.value, index, "passingYear")}
            className={` text-black   input input-bordered  mb-3`}
          />
          <label className="label text-secondary">
            School or College or University Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Institue Name."
            onChange={(e) =>
              handleChange(e.target.value, index, "institueName")
            }
            className={` text-black   input input-bordered  mb-3`}
          />
          <label className="label text-secondary">Result</label>
          <input
            type="number"
            placeholder="Enter Your Result."
            onChange={(e) => handleChange(e.target.value, index, "result")}
            className={` text-black   input input-bordered  mb-3`}
          />
          <label className="label text-secondary">Degree Description</label>
          <textarea
            className="textarea textarea-bordered text-black"
            placeholder="Enter Your Experience Description"
            onChange={(e) => handleChange(e.target.value, index, "description")}
          ></textarea>
        </div>
      ))}

      {/* map myEducationFields end */}
    </>
  );
};

export default MyEducation;
