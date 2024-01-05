import React, { useEffect, useState } from "react";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setName(user.name);
    setEmail(user.email);
  }, []);

  return (
    <div style={{ paddingTop: "80px" }}>
      <img src="./images/user.png" />
      <h1 style={{ textTransform: "uppercase", marginTop: "48px" }}>
        Hii, {name}
      </h1>
      <h2>Email Id: {email}</h2>
    </div>
  );
};

export default Profile;
