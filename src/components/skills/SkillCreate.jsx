import { useContext, useEffect } from "react";
import SkillContext from "../../Context/SkillContext";

export const SkillCreate = () => {
  const { formValues, onChange, storeSkill, errors, setErrors } =
    useContext(SkillContext);
  useEffect(() => {
    setErrors({});
  }, []);
  return (
    <div className="mt-12">
      <form
        onSubmit={storeSkill}
        className="create-form">
          <div className="create-form-header">
            Create New Employee 
          </div><hr /><br />
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Employee Name
            </label>
            <input
              name="name"
              value={formValues["name"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.name && (
              <span className="text-sm text-red-400">{errors.name[0]}</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block mb-2 text-sm font-medium">
              Address
            </label>
            <input
              name="address"
              value={formValues["address"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.address && (
              <span className="text-sm text-red-400">{errors.address[0]}</span>
            )}
          </div>


          <div className="mb-4">
            <label htmlFor="contact_no" className="block mb-2 text-sm font-medium">
              Contact No.
            </label>
            <input
              name="contact_no"
              value={formValues["contact_no"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.contact_no && (
              <span className="text-sm text-red-400">{errors.contact_no[0]}</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block mb-2 text-sm font-medium">
              Age
            </label>
            <input
              name="age"
              value={formValues["age"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.age && (
              <span className="text-sm text-red-400">{errors.age[0]}</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="department" className="block mb-2 text-sm font-medium">
              Department
            </label>
            <input
              name="department"
              value={formValues["department"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.department && (
              <span className="text-sm text-red-400">{errors.department[0]}</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="slug" className="block mb-2 text-sm font-medium">
              Skills
            </label>
            <input
              name="slug"
              value={formValues["slug"]}
              onChange={onChange}
              className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"
            />
            {errors.slug && (
              <span className="text-sm text-red-400">{errors.slug[0]}</span>
            )}
          </div>
        </div>
        <div className="my-4">
          <button
            type="submit"
            className="btn-submit px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
