import React, { useContext } from "react";
import useLoadData from "../../../hooks/useLoadData";
import { AuthContextProvider } from "../../../contexts/AuthContext/AuthContext";
import Loader from "../../shared/loaders/Loader";
import Error from "../../shared/error/Error";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { usePDF } from "react-to-pdf";
import TittleCompo from "../../../components/titleCompo/TittleCompo";

const MyResume = () => {
  const { user } = useContext(AuthContextProvider); // auth context
  const { toPDF, targetRef } = usePDF({
    filename: `${user?.displayName}_resume`,
    page: {
      size: "A4",
      margin: 10,
    },
  }); // react to pdf hook

  // user loading url
  const userUrl = `user-data?email=${user?.email}`;

  // load user custom hook
  const [userLoading, userData] = useLoadData("user-data", userUrl);

  // load resume url
  const url = `my-resumes?email=${user?.email}`;

  const [isLoading, data] = useLoadData("my-resumes", url); // loader custom hook

  if (isLoading || userLoading) {
    return <Loader></Loader>;
  }
  if (!data.success) {
    return <Error message={data.message}></Error>;
  }
  return (
    <>
      <TittleCompo title={"My Resume"}></TittleCompo>
      <section className=" w-11/12 mx-auto my-20">
        <div ref={targetRef} style={{ width: "100%", height: "100%" }}>
          <div>
            <h1 className=" text-4xl font-bold text-left uppercase">
              {data.resume.name}
            </h1>
            <h3 className=" text-xl  text-left uppercase">
              {userData.user.post}
            </h3>

            {/* social links, contact information and address */}
            <div>
              <div className=" my-1 flex gap-x-2 justify-start">
                <Link className=" btn-link">{user.email}</Link>
                {data.resume.social.map((socialAccount, index) => (
                  <Link
                    className={` btn-link ${!socialAccount.link && "hidden"}`}
                    key={index}
                    to={socialAccount.link}
                  >
                    {socialAccount.title === "facebook"
                      ? "Facebook"
                      : socialAccount.title === "linkdin"
                      ? "Linkedin"
                      : socialAccount.title === "github"
                      ? "Github"
                      : socialAccount.title === "twiter"
                      ? "Twiter"
                      : ""}
                  </Link>
                ))}
              </div>
              <p>{data.resume.mobile}</p>
              <p>{data.resume.address}</p>
            </div>
            <div className="border-b-2 border-black my-3"></div>
          </div>

          {/* careerObjective */}
          {data.resume.careerObjective && (
            <div className=" my-5">
              <h1 className=" text-xl font-bold uppercase mb-1 ">
                Carrer Objective
              </h1>
              <p className=" text-base">{data.resume.careerObjective}</p>
              <div className="border-b-2 border-black my-5"></div>
            </div>
          )}

          {/* experience */}
          {data?.resume?.experience[0]?.name && (
            <div className=" my-3">
              <h1 className=" text-xl font-bold uppercase">experience</h1>
              {data.resume.experience.map((experience, index) => (
                <div key={index}>
                  <h3 className=" text-lg font-medium">
                    I works at <strong>{experience.companyName}</strong> as a{" "}
                    <strong>{experience.title}</strong> from{" "}
                    <strong>{experience.startDate}</strong> to{" "}
                    <strong>{experience.endDate}</strong>
                  </h3>
                  <p className=" text-base">{experience.description}</p>
                  <div className=" divider"></div>
                </div>
              ))}
              <div className="border-b-2 border-black my-5"></div>
            </div>
          )}

          {/* skills */}
          {data.resume.skills && (
            <div className=" my-3">
              <h1 className=" text-xl font-bold uppercase">Skills</h1>

              <div className="overflow-x-auto">
                <table className="table">
                  <tbody>
                    {/* experties skills */}
                    <tr>
                      <th className=" ps-0">Experties</th>
                      <td className=" font-medium text-base">
                        {data.resume.skills[0].expertise.map(
                          (expertSkill, index) => (
                            <span key={index}>{expertSkill}</span>
                          )
                        )}
                      </td>
                    </tr>

                    {/* comofrtable skills */}
                    <tr>
                      <th className=" ps-0">Comfortable</th>
                      <td className=" font-medium text-base">
                        {data.resume.skills[1].comfortable.map(
                          (comfortableSkill, index) => (
                            <span key={index}>{comfortableSkill}</span>
                          )
                        )}
                      </td>
                    </tr>

                    {/* familiar skills */}
                    <tr>
                      <th className=" ps-0">Familiar</th>
                      <td className=" font-medium text-base">
                        {data.resume.skills[2].familiar.map(
                          (familiarSkill, index) => (
                            <span key={index}>{familiarSkill}</span>
                          )
                        )}
                      </td>
                    </tr>

                    {/* tools  */}
                    <tr>
                      <th className=" ps-0">Tools</th>
                      <td className=" font-medium text-base">
                        {data.resume.skills[3].tools.map((tool, index) => (
                          <span key={index}>{tool}</span>
                        ))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="border-b-2 border-black my-5"></div>
            </div>
          )}

          {/* projects */}
          {data?.resume?.projects[0]?.name && (
            <div className=" my-3">
              <h1 className=" text-xl font-bold uppercase">Projects</h1>
              {data.resume.projects.map((project, index) => (
                <div key={index}>
                  <h3 className=" text-lg font-medium uppercase mt-2 mb-1">
                    {" "}
                    Project Name {project.name}
                  </h3>
                  <p className=" text-base">{project.description}</p>
                  <div className={`divider`}></div>
                </div>
              ))}
              <div className="border-b-2 border-black my-5"></div>
            </div>
          )}

          {/* education */}
          {data?.resume?.education[0]?.name && (
            <div className=" my-3">
              <h1 className=" text-xl font-bold uppercase">education</h1>
              {data.resume.education.map((educationData, index) => (
                <div key={index}>
                  <h3 className=" text-lg font-medium uppercase mt-2 mb-1">
                    {" "}
                    Degree {educationData.title}
                  </h3>
                  <p>Institute {educationData.institueName}</p>
                  <p>Passing Year {educationData.passingYear}</p>
                  <p>Result {educationData.result}</p>
                  <p className=" text-base">{educationData.description}</p>
                  <div className=" divider"></div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className=" flex justify-center space-x-5">
          <Link
            to={`/my-account/edit-my-resume`}
            className=" btn btn-primary rounded"
          >
            Edit Resume
          </Link>
          <button
            onClick={() => {
              toPDF();
            }}
            className=" btn btn-secondary rounded"
          >
            Download PDF{" "}
            <span className=" text-xl font-bold text-white">
              <AiOutlineDownload />
            </span>{" "}
          </button>
        </div>
      </section>
    </>
  );
};

export default MyResume;
