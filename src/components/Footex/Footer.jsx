import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-gray-900 text-gray-300 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Test-self</h1>
          <p className="py-3">Fully responsive quiz app</p>
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold pb-2">Social Media Links</h1>
          <span>Linkedin: </span>
          <a
            href="https://www.linkedin.com/in/pankajkumar1234/"
            target="_blank"
            className="text-[12px] mt-2 text-blue-300 underline"
          >
            https://www.linkedin.com/in/pankajkumar1234
          </a>
          <br />
          <span>Github: </span>
          <a
            href="https://github.com/pankajvashu1998"
            target="_blank"
            className="text-[12px] text-blue-300 underline"
          >
            https://github.com/pankajvashu1998
          </a>
        </div>
        <div className="p-4">
            <h1 className="text-2xl font-bold pb-2">Contact Me</h1>
            <p className="text-sm"><span>Mobile No. : </span>+917654470477</p>
            <p className="text-sm"><span>Email : </span>pk85764798@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
