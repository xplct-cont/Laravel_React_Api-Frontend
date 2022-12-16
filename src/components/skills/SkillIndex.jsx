import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SkillContext from "../../Context/SkillContext";


export const SkillIndex = () => {
  const { skills, getSkills, deleteSkill } = useContext(SkillContext);
  useEffect(() => {
    getSkills();
  }, []);
  return (
   
    <div className="mt-12">
       <h2>List of Employees</h2>
      <div className="btn-create-side m-2 p-2">
        <Link
          to="/employees/create"
          className="btn-create px-4 py-2  hover:bg-indigo-700 text-white rounded-md"
        >
          New Employee
        </Link>
      </div>
      <div className="overflow-x-auto relative" bis_skin_checked="1">
        <table className="tb-body">
          <thead className="tb-header">
            <tr>
              <th scope="col" className="py-3 px-6">
               ID
              </th>
              <th scope="col" className="py-3 px-6">
                Employee Name
              </th>
              <th scope="col" className="py-3 px-6">
                Address
              </th>
              <th scope="col" className="py-3 px-6">
                Contact No
              </th>
              <th scope="col" className="py-3 px-6">
                Age
              </th>
              <th scope="col" className="py-3 px-6">
                Department
              </th>
              <th scope="col" className="py-3 px-6">
                Skill
              </th>
              <th scope="col" className="py-3 px-6">
                Actions
              </th>
             
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => {
              return (
                <tr
                  key={skill.id}
                  className="tb-body-2"
                >
                  <td className="py-4 px-6">{skill.id}</td>
                  <td className="py-4 px-6">{skill.name}</td>
                  <td className="py-4 px-6">{skill.address}</td>
                  <td className="py-4 px-6">{skill.contact_no}</td>
                  <td className="py-4 px-6">{skill.age}</td>
                  <td className="py-4 px-6">{skill.department}</td>
                  <td className="py-4 px-6">{skill.slug}</td>
                  <td className="py-4 px-6 space-x-2">
                    <Link
                      to={`/employees/${skill.id}/edit`}
                      className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700  text-white rounded-md"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteSkill(skill.id)}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
 
  );
};
