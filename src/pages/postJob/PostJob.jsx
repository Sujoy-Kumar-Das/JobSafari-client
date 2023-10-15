import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { errorMessageHandeler } from "../../commonFuntions/errorMessageHandeler";
import { AuthContextProvider } from "../../contexts/AuthContext/AuthContext";
import usePostData from "../../hooks/usePostData";
import TittleCompo from "../../components/titleCompo/TittleCompo";

const PostJob = () => {
  // contexts
  const { user } = useContext(AuthContextProvider);
  // react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //   post data custom hook
  const [postLoader, postData] = usePostData(
    `post-job?email=${user.email}`,
    reset
  );

  //   states
  const [experienceFields, setExperienceFields] = useState([""]);
  const [skillsFields, setSkillsField] = useState([""]);

  // handle dynamic field
  const handelDynamicField = (arrary, setArray) => {
    setArray([...arrary, ""]);
  };

  // delete field
  const handleFieldDelete = (id, arrary, setArray) => {
    const fieldLength = arrary.length;
    if (fieldLength == 1) {
      return errorMessageHandeler("You can't delete all requirments fields.");
    } else {
      const newInputValus = [...arrary];
      newInputValus.splice(id, 1);
      setArray(newInputValus);
    }
  };

  // handle post job

  const handlePostJob = async (data) => {
    // job post data
    const jobPostData = {
      job_title: data.jobTitle,
      company: user.displayName,
      email: user.email,
      location: data.location,
      requirements: data.requirments,
      education: data.education ? data.education : "All Background",
      skills: data.skills,
      experience: data.experience
        ? data.experience
        : "No Experienc. Fresher can apply",
      datePosted: new Date().toISOString().split("T")[0],
      deadline: data.date,
      how_to_apply: `Send your resume and a legal writing sample to ${user.email}`,
      Career_level: data.careerLevel,
      quantity: data.quantity,
      salary: data.salary,
      Founded_in: data.founed ? data.founed : "Not mentioned",
      categories: data.categories ? data.categories : "Not mentioned",
      company_size: data.companySize ? data.companySize : "Not mentioned",
      description: data.description,
    };

    // post data custom hook
    await postData(jobPostData);
  };

  return (
    <>
      <TittleCompo title={"Post Job"}></TittleCompo>
      <section className="pb-5">
        <form onSubmit={handleSubmit(handlePostJob)}>
          <div className="  w-full lg:w-4/5 mx-auto ">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className=" w-full lg:w-2/5 mb-2 lg:mb-0">
                <label className="label">Job Title</label>
                <p className="ps-1">
                  A job title must describe one possition only.
                </p>
              </div>
              <input
                type="text"
                placeholder={`${
                  errors?.jobTitle
                    ? errors?.jobTitle?.message
                    : "Enter Your Job Title"
                }`}
                className={`input input-bordered w-full lg:w-1/2 ${
                  errors?.jobTitle?.message &&
                  " input-error placeholder-error border-error"
                }`}
                {...register("jobTitle", {
                  required: "Job Titel Is Required",
                })}
              />
            </div>
            <div className=" divider"></div>
          </div>

          <div className=" w-full lg:w-4/5 mx-auto">
            <div className="  flex flex-col lg:flex-row items-center justify-between">
              <div className=" w-full lg:w-2/5 mb-2 lg:mb-0">
                <label className="label">Job Description</label>
                <p className="ps-1">
                  Provide a short job description about the job. Keep it short
                  and point and to the point.{" "}
                </p>
              </div>
              <textarea
                placeholder={`${
                  errors?.description
                    ? errors?.description?.message
                    : "Enter Your Job Description"
                }`}
                className={`textarea textarea-bordered w-full lg:w-1/2 ${
                  errors?.description?.message &&
                  " textarea-error placeholder-error border-error"
                }`}
                {...register("description", {
                  required: "Job Description is Required",
                })}
              ></textarea>
            </div>
            <div className=" divider"></div>
          </div>

          <div className=" w-full lg:w-4/5 mx-auto">
            <div className="  flex flex-col lg:flex-row items-center justify-between">
              <div className=" w-full lg:w-2/5 mb-2 lg:mb-0">
                <label className="label">Location</label>
                <p className="ps-1">Location help you find nearest employs.</p>
              </div>
              <input
                type="address"
                placeholder={`${
                  errors?.location
                    ? errors?.location?.message
                    : "Enter Your Job Location"
                }`}
                className={`input input-bordered w-full lg:w-1/2 ${
                  errors?.location?.message &&
                  " input-error placeholder-error border-error"
                }`}
                {...register("location", {
                  required: "location is Required",
                })}
              />
            </div>
            <div className=" divider"></div>
          </div>

          <div className=" w-full lg:w-4/5 mx-auto">
            <div className="  flex flex-col lg:flex-row items-center justify-between">
              <div className=" w-full lg:w-2/5 mb-2 lg:mb-0">
                <label className="label">Salary Range</label>
                <p className="ps-1"> Please enter a salary range .</p>
              </div>
              <input
                type="text"
                placeholder={`${
                  errors?.salary
                    ? errors?.salary?.message
                    : "Enter Your Job Description"
                }`}
                className={`input input-bordered w-full lg:w-1/2 ${
                  errors?.salary?.message &&
                  " input-error placeholder-error border-error"
                }`}
                {...register("salary", {
                  required: "Salary range is Required",
                })}
              />
            </div>
            <div className=" divider"></div>
          </div>

          <div className=" w-full lg:w-4/5 mx-auto">
            <div className="  flex flex-col lg:flex-row items-center justify-between">
              <div className=" w-full lg:w-2/5 mb-2 lg:mb-0">
                <label className="label">Career level</label>
                <p className="ps-1">
                  Career level will help you to find the exact candidate.
                </p>
              </div>
              <select
                className="select select-bordered w-1/2"
                {...register("careerLevel", {
                  required: "Please select a carrer level.",
                })}
              >
                <option value="intern">Intern</option>
                <option value="fresher">Fresher</option>
                <option value="senior">Senior</option>
              </select>
            </div>
            <div className=" divider"></div>
          </div>
          <div className=" w-full lg:w-4/5 mx-auto">
            <div className="  flex flex-col lg:flex-row items-center justify-between">
              <div className=" w-full lg:w-2/5 mb-2 lg:mb-0">
                <label className="label">Education</label>
                <p className="ps-1">
                  {" "}
                  Education will help you to find the exact candidate.
                </p>
              </div>
              <input
                type="text"
                placeholder="Enter How Much Experience You Required."
                className={`input input-bordered w-full lg:w-1/2 ${
                  errors?.education?.message &&
                  " input-error placeholder-error border-error"
                }`}
                {...register("education")}
              />
            </div>
            <div className=" divider"></div>
          </div>
          <div className=" w-full lg:w-4/5 mx-auto">
            <div className="  flex flex-col lg:flex-row items-center justify-between">
              <div className=" w-full lg:w-2/5 mb-2 lg:mb-0">
                <label className="label">Experience</label>
                <p className="ps-1">
                  {" "}
                  Experience will help you to find the exact candidate.
                </p>
              </div>
              <input
                type="number"
                placeholder={`${
                  errors?.experience
                    ? errors?.experience?.message
                    : "Enter How Much Experience You Required."
                }`}
                className={`input input-bordered w-full lg:w-1/2 ${
                  errors?.experience?.message &&
                  " input-error placeholder-error border-error"
                }`}
                {...register("experience")}
              />
            </div>
            <div className=" divider"></div>
          </div>

          <div className=" w-full lg:w-4/5 mx-auto">
            <div className="  flex flex-col lg:flex-row items-center justify-between">
              <div className=" w-full lg:w-2/5 mb-2 lg:mb-0">
                <label className="label text-left">Quantity</label>
                <p className="ps-1">
                  {" "}
                  Quantity means how many employs you want.
                </p>
              </div>
              <input
                type="number"
                placeholder={`${
                  errors?.quantity
                    ? errors?.quantity?.message
                    : "Enter How Many Employs You Want."
                }`}
                className={`input input-bordered w-full lg:w-1/2 ${
                  errors?.quantity?.message &&
                  " input-error placeholder-error border-error"
                }`}
                {...register("quantity", { required: "Quantity Is Required." })}
              />
            </div>
            <div className=" divider"></div>
          </div>

          <div className=" w-full lg:w-4/5 mx-auto">
            <div className="  flex flex-col lg:flex-row items-center justify-between">
              <div className=" w-full lg:w-2/5 mb-2 lg:mb-0">
                <label className="label text-left">Closing Date</label>
                <p className="ps-1">
                  {" "}
                  Appliction Closing Date will help you for close the
                  application.
                </p>
              </div>
              <input
                type="date"
                className={`input input-bordered w-full lg:w-1/2 ${
                  errors?.date?.message &&
                  " input-error placeholder-error border-error"
                }`}
                {...register("date", { required: "Cosing Date Is Required." })}
              />
            </div>

            <div className=" divider"></div>
          </div>

          <div className="  w-full lg:w-4/5 mx-auto ">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className=" w-full lg:w-2/5 mb-2 lg:mb-0">
                <label className="label">Requirements</label>
                <p className="ps-1">Requirements is important.</p>
              </div>
              <div className=" lg:w-1/2  w-full">
                <div className=" flex justify-end">
                  <button
                    onClick={() => {
                      handelDynamicField(experienceFields, setExperienceFields);
                    }}
                    type="button"
                    className=" btn btn-secondary btn-xs"
                  >
                    +
                  </button>
                </div>
                {experienceFields.map((field, index) => (
                  <div key={index} className=" flex items-center gap-x-2">
                    <input
                      type="text"
                      placeholder={"Reqirment is required."}
                      className={` input input-bordered w-full my-2 ${
                        errors?.requirments &&
                        " input-error placeholder-error border-error"
                      }`}
                      {...register(`requirments[${index}]`, {
                        required: true,
                      })}
                    />
                    <button
                      className=" btn btn-xs btn-outline btn-error"
                      type="button"
                      onClick={() =>
                        handleFieldDelete(
                          index,
                          experienceFields,
                          setExperienceFields
                        )
                      }
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className=" divider"></div>
          </div>

          <div className="  w-full lg:w-4/5 mx-auto ">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className=" w-full lg:w-2/5 mb-2 lg:mb-0">
                <label className="label">Skills</label>
                <p className="ps-1">Skills is important.</p>
              </div>
              <div className=" lg:w-1/2  w-full">
                <div className=" flex justify-end">
                  <button
                    onClick={() => {
                      handelDynamicField(skillsFields, setSkillsField);
                    }}
                    type="button"
                    className=" btn btn-secondary btn-xs"
                  >
                    +
                  </button>
                </div>
                {skillsFields.map((field, index) => (
                  <div key={index} className=" flex items-center gap-x-2">
                    <input
                      type="text"
                      placeholder={"Skills is required."}
                      className={` input input-bordered w-full my-2 ${
                        errors?.skills &&
                        " input-error placeholder-error border-error"
                      }`}
                      {...register(`skills[${index}]`, {
                        required: true,
                      })}
                    />
                    <button
                      className=" btn btn-xs btn-outline btn-error"
                      type="button"
                      onClick={() =>
                        handleFieldDelete(index, skillsFields, setSkillsField)
                      }
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className=" divider"></div>
          </div>
          <div className=" flex justify-center w-full lg:w-1/5 mx-auto">
            {postLoader ? (
              <button className="btn btn-primary w-full">
                Uploading
                <span className="loading loading-spinner"></span>
              </button>
            ) : (
              <button className=" btn btn-primary  w-full">Post</button>
            )}
          </div>
        </form>
      </section>
    </>
  );
};

export default PostJob;
