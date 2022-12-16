import { Routes, Route, Link } from "react-router-dom";
import { SkillProvider } from "./Context/SkillContext";

import { Home } from "./components/Home";
import { SkillIndex } from "./components/skills/SkillIndex";
import { SkillCreate } from "./components/skills/SkillCreate";
import { SkillEdit } from "./components/skills/SkillEdit";

function App() {
  return (
    <SkillProvider>
      <div className="">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <div className="mx-auto ">

          <ul>
            <li className=""> <Link to="/">Home</Link></li>
            <li className=""> <Link to="/employees">Employees</Link></li>
          </ul>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees" element={<SkillIndex />} />
            <Route path="/employees/create" element={<SkillCreate />} />
            <Route path="/employees/:id/edit" element={<SkillEdit />} />
          </Routes>
        </div>
      </div>
    </SkillProvider>
  );
}

export default App;
