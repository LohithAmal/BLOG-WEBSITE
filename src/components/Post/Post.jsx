import React from "react";
import "./Post.css";
import Blog from "../../Assets/blog.jpg";

function POst() {
  return (
    <div className="post">
      <img className="post-image" src={Blog} alt="blog image"></img>
      <div className="post-info">
        <div className="postcard">
          <span className="post-cat">Music</span>
          <span className="post-cat">Life</span>
        </div>
        <span className="post-titile"> Lorem ipsum dolor sit.</span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="post-desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
        voluptates aut non cum qui nam itaque rem autem, quia id modi est saepe
        labore cumque quidem minus eligendi delectus! Laudantium saepe eaque
        natus odit fuga libero, delectus dolor repudiandae corporis eius, vero
        quibusdam provident magni nihil incidunt maxime beatae blanditiis? Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Incidunt voluptates
        aut non cum qui nam itaque rem autem, quia id modi est saepe labore
        cumque quidem minus eligendi delectus! Laudantium saepe eaque natus odit
        fuga libero, delectus dolor repudiandae corporis eius, vero quibusdam
        provident magni nihil incidunt maxime beatae blanditiis? Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Incidunt voluptates aut
        non cum qui nam itaque rem autem, quia id modi est saepe labore cumque
        quidem minus eligendi delectus! Laudantium saepe eaque natus odit fuga
        libero, delectus dolor repudiandae corporis eius, vero quibusdam
        provident magni nihil incidunt maxime beatae blanditiis? Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Incidunt voluptates aut
        non cum qui nam itaque rem autem, quia id modi est saepe labore cumque
        quidem minus eligendi delectus! Laudantium saepe eaque natus odit fuga
        libero, delectus dolor repudiandae corporis eius, vero quibusdam
        provident magni nihil incidunt maxime beatae blanditiis?
      </p>
    </div>
  );
}

export default POst;
