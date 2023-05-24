import React from "react";
import "./AdminBody.css";
import { CgProductHunt } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineRight } from "react-icons/ai";
import { FiSmile } from "react-icons/fi";
import { ImNeutral } from "react-icons/tb";
import { CgSmileSad } from "react-icons/cg";
import { AiFillPlusCircle } from "react-icons/ai";
 import {RiCalendarTodoFill} from "react-icons/ri"

function AdminBody() {
  return (
    <>
      <div className="container">
        <div className="midBar">
          {/* <div> */}
          <CgProductHunt />
          <h4>All products</h4>
          <RiArrowDropDownLine />
          {/* </div> */}

          <h4>All Groups</h4>
          <RiArrowDropDownLine />
          <h4>Recent activities</h4>
          <AiOutlineRight />
        </div>
        <div className="miniCards">
          <div className="card1">
            <h4>Unresolved</h4>
            <h2>3</h2>
          </div>
          <div className="card2">
            <h4>Overdue</h4>
            <h2>3</h2>
          </div>
          <div className="card3">
            <h4>Due today</h4>
            <h2>0</h2>
          </div>
          <div className="card4">
            <h4>Open</h4>
            <h2>3</h2>
          </div>
          <div className="card5">
            <h4>On hold</h4>
            <h2>0</h2>
          </div>
          <div className="card6">
            <h4>Unassigned</h4>
            <h2>3</h2>
          </div>
        </div>
        <div className="graphContainer"></div>
        <div className="bigCards">
          <div className="card-1">
            <div className="card-Head">
              <div className="headLeft">
                <h4>Unresolved tickets</h4>
                <p>Across helpdesk</p>
              </div>
              <div>
                <h4 className="viewD">View Details</h4>
              </div>
            </div>
            <div className="Group">
              <h4 className="group">Group</h4>
              <h4 className="open">Open</h4>
            </div>
            <div className="esc">
              <h4 className="rightEsc">Escalations</h4>
              <h4>3</h4>
            </div>
          </div>

          <div className="card-2">
            <div>
              <div>
                <h4>Customer satisfaction</h4>
                <p>Across helpdesk this month</p>
              </div>
              <div>
                <h4 className="viewD">View Details</h4>
              </div>
            </div>
            <div>
              <h3>Response recieved</h3>
              <h3>0</h3>
            </div>
            <div>
              <h3>Positive</h3>
              <h3>
                0% <FiSmile />
              </h3>
            </div>
            <div>
              <h3>Neutral</h3>
              0%
              <FiSmile />
            </div>
            <div>
              <h3>Negative</h3>
              0%
              <CgSmileSad />
            </div>
          </div>
          <div className="card-3">dwsds</div>
          <div className="card-4">
            <h3>To-do</h3>
            <div>
              <AiFillPlusCircle />
              <input type="text" placeholder="Add a to-do" />
              <div>
                <RiCalendarTodoFill />
                <h4>You have no tasks to do!</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminBody;
