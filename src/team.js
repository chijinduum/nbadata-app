import * as React from "react";
import "./team.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";

export function Team(props) {
  return (
    <div
      className="card text-center border-dark mb-3"
      style={{ width: "15rem" }}
    >
      <div className="card-header">{props.conference}</div>
      <div className="p-3">
        <img
          src={props.logo}
          className="img-fluid"
          style={{ height: "100px", width: "auto" }}
          alt={props.name}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        {/* <p className="card-text">{props.conference}</p> */}
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Wins: {props.win}</li>
          <li className="list-group-item">Losses: {props.lose}</li>
          <li className="list-group-item">
            Conference Standing: {props.position}
          </li>
        </ul>
        <div>
          <button type="button" className="btn btn-lg" onClick={props.previous}>
            <CiCircleChevLeft size={30} />
          </button>
          <button
            type="button"
            className="btn btn-lg ms-2"
            onClick={props.next}
          >
            <CiCircleChevRight size={30} />
          </button>
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">{props.season}</small>
      </div>
    </div>
  );
}
