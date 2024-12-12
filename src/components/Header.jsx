import React from "react";

const Header = () => {
  return (
    <div className="row">
      <div className="col-md-8">
        <h1>Sara Adnan</h1>
        <p>Software Engineering Student</p>
        <p>
          <strong>Email:</strong> sara.a.ghori@gmail.com |{" "}
          <strong>Phone:</strong> +92-300-8521881
        </p>
        <p>
          <strong>Location:</strong> Islamabad, Pakistan
        </p>
        <a
          href="https://linkedin.com/in/sara-adnan"
          target="_blank"
          className="btn btn-primary"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
      </div>
      <div className="col-md-4 text-md-end">
        <img
          src="/img.jpg"
          alt="Profile"
          className="img-fluid rounded-circle"
          width="150"
        />
      </div>
    </div>
  );
};

export default Header;
