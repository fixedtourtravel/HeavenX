import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button, Table } from "react-bootstrap";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import style from "./Role/Role.module.css";

function Email() {
  return (
    <div className={style.home}>
      <div className={style.row1}>
        <div>
          <Button>New Staff Member</Button>
          <BarChartIcon style={{ marginTop: "15", fontSize: "30" }} />
        </div>
        <div>
          <FilterAltIcon style={{ color: "aqua", fontSize: "30" }} />
          <strong> Sort by</strong>
          <input type="text" />
        </div>
      </div>
      <div className={style.row3}>
        <input type="number"></input>
        <p>Export</p>
        <AutorenewIcon />
      </div>
      <Table striped bordered borderless hover>
        <thead>
          <tr>
            <th className={style.th}>#</th>
            <th className={style.th}>Name</th>
            <th className={style.th}>Email</th>
            <th className={style.th}>Role</th>
            <th className={style.th}>Last Login</th>
            <th className={style.th}>Active</th>
            <th className={style.th}>Option</th>
          </tr>
        </thead>

        <tbody>
          <tr style={{ backgroundColor: "white" }}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Email;
