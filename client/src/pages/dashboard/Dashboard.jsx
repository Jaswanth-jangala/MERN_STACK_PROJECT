import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__left">
        <Sidebar />
      </div>
      <div className="dashboard__right">
        <div className="dashboard__rightContent">
          <h2> Project Status Dashboard</h2>
          <div className="taskcount">
            <div className="todo box">project</div>
            <div className="inprogress box">inprogress</div>
            <div className="done box">done</div>
          </div>
          <div className="createButton">
            <Link to="/taskmanager" className="button">
              Create Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
