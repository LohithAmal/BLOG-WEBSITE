import React from "react";
import "./Singlepost.css";
import Blog from "../../Assets/blog.jpg";
function Singlepost() {
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <img className="single-post-image" src={Blog} alt="blog image"></img>
        <h1 className="single-post-title">
          Lorem ipsum dolor sit amet.
          <div className="single-post-edit-container">
            <i className="single-post-icon far fa-edit"></i>
            <i className="single-post-icon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Author: <b>Amal</b>{" "}
          </span>
          <span className="single-post-date">1 hour ago</span>
        </div>
        <p className="single-post-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          ipsam voluptates laudantium fugit nesciunt. Saepe blanditiis tempora
          odit, odio voluptate quod corporis! Delectus vel aliquam id eveniet
          maiores, laudantium veniam at nam saepe ea enim consequatur ipsam
          atque deleniti esse. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Incidunt ipsam voluptates laudantium fugit nesciunt.
          Saepe blanditiis tempora odit, odio voluptate quod corporis! Delectus
          vel aliquam id eveniet maiores, laudantium veniam at nam saepe ea enim
          consequatur ipsam atque deleniti esse. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Incidunt ipsam voluptates laudantium
          fugit nesciunt. Saepe blanditiis tempora odit, odio voluptate quod
          corporis! Delectus vel aliquam id eveniet maiores, laudantium veniam
          at nam saepe ea enim consequatur ipsam atque deleniti esse. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsam
          voluptates laudantium fugit nesciunt. Saepe blanditiis tempora odit,
          odio voluptate quod corporis! Delectus vel aliquam id eveniet maiores,
          laudantium veniam at nam saepe ea enim consequatur ipsam atque
          deleniti esse.
        </p>
      </div>
    </div>
  );
}

export default Singlepost;
