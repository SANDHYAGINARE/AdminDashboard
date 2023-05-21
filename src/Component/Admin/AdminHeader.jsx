import React from "react";
import './Adminheader.css';
import { RiFilter2Line } from "react-icons/ri";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import {IoIosSearch} from 'react-icons/io';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {BsQuestionSquare} from 'react-icons/bs';
import {AiOutlineHome, AiTwotoneCloseSquare} from 'react-icons/ai';


function AdminHeader() {
  return (
    <div className="mainContainer">
      <div className="leftSide">
        <button>
          <RiFilter2Line />
        </button>
        <h4>My Dashboard</h4>
      </div>
      <div className="rightSide">
        <h4>Your trial ends in 18 days</h4>
        <button>Subscribe</button>
        <button>Request Demo</button>
        <button>Recommended features</button>
        <button className="NewBtn">
          <AiOutlinePlusSquare />
          <h4>New</h4>
          <RiArrowDropDownLine />
        </button>
        <div></div>
        <div>
       <IoIosSearch/>
        <input type="text" placeholder="Search" />
        <IoMdNotificationsOutline/>
        <BsQuestionSquare/>
        <AiOutlineHome/>
        <AiTwotoneCloseSquare/>
        </div>
      </div>
    </div>
  );
}

export default AdminHeader;
