import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

let root = createRoot(document.querySelector("#root"));

function Profile(props) {
  const { img, heading, para } = props;
  return (
    <div className="profileCard">
      <img src={img} alt={heading} />

      <div className="card-details">
        <h2>{heading}</h2>
        <p>{para}</p>
      </div>
    </div>
  );
}

const profiles = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
    heading: "Zohaib",
    para: "A frontend developer who loves React.",
  },
  {
    id: 2,
    img: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
    heading: "Ahmad ali",
    para: "A content creator who loves traveling.",
  },
  {
    id: 3,
    img: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
    heading: "Sara john",
    para: "A designer who loves design.",
  },
];

root.render(
  <div className="cardContainer">
    {profiles.map((profile) => (
      <Profile
        key={profile.id}
        img={profile.img}
        heading={profile.heading}
        para={profile.para}
      />
    ))}
  </div>,
);
