const Skills = ({ register, errors }) => {
  return (
    <div id="skills">
      <h1 className=" text-3xl lg:text-4xl font-bold text-secondary mb-5">
        Skills
      </h1>
      <div className="form-control my-5">
        <div className=" flex gap-x-2 ">
          <label className="label">Experties</label>
          <p>
            ( separate expertise skills by using comma"
            <span className=" text-2xl">,</span>")
          </p>
        </div>
        <input
          type="text"
          placeholder="Enter Your Expertise Technologys."
          className={`input input-bordered ${
            errors?.expertise?.message &&
            " input-error placeholder-error border-error"
          }`}
          {...register("expertise", {
            required: "Expertise Technology Required",
          })}
        />

        {errors?.expertise && (
          <p className=" text-error mt-1"> {errors?.expertise?.message}</p>
        )}
      </div>

      <div className="form-control">
        <div className=" flex gap-x-2 ">
          <label className="label">Comfortable</label>
          <p>
            ( separate comfortable skills by using comma"
            <span className=" text-2xl">,</span>")
          </p>
        </div>
        <input
          type="text"
          placeholder="Enter Your Comfortable Technologys."
          className={`input input-bordered ${
            errors?.comfortable?.message &&
            " input-error placeholder-error border-error"
          }`}
          {...register("comfortable", {
            required: "Comfortable Technology Required",
          })}
        />

        {errors?.comfortable && (
          <p className=" text-error mt-1"> {errors?.tools?.comfortable}</p>
        )}
      </div>

      <div className="form-control my-5">
        <div className=" flex gap-x-2 ">
          <label className="label">Falmiliar</label>
          <p>
            ( separate Familiar skills by using comma"
            <span className=" text-2xl">,</span>")
          </p>
        </div>
        <input
          type="text"
          placeholder="Enter Your Familiar Technologys."
          className={`input input-bordered ${
            errors?.familiar?.message &&
            " input-error placeholder-error border-error"
          }`}
          {...register("familiar", {
            required: "Familiar Technology Required",
          })}
        />

        {errors?.familiar && (
          <p className=" text-error mt-1"> {errors?.tools?.familiar}</p>
        )}
      </div>

      <div className="form-control">
        <div className=" flex gap-x-2 ">
          <label className="label">Tools</label>
          <p>
            ( separate Tools by using comma"
            <span className=" text-2xl">,</span>")
          </p>
        </div>
        <input
          type="text"
          placeholder="Enter Your Tools."
          className={`input input-bordered ${
            errors?.tools?.message &&
            " input-error placeholder-error border-error"
          }`}
          {...register("tools", {
            required: "Tools Is Required",
          })}
        />
        {errors?.tools && (
          <p className=" text-error mt-1"> {errors?.tools?.message}</p>
        )}
      </div>
      {/* */}
    </div>
  );
};

export default Skills;
