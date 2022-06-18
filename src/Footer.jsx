import React from "react";

function Footer() {
  return (
    <div>
      <a
        href="https://github.com/AR9157"
        style={{ color: "white" }}
        target={"_blank"}
        rel="noreferrer"
        title="GitHub"
      >
        <i className="bi bi-github m-2"></i>
      </a>
      <a
        href="https://ar9157.me"
        style={{ color: "white" }}
        target={"_blank"}
        rel="noreferrer"
        title="Main Website"
      >
        <i className="bi bi-globe m-2"></i>
      </a>
      <a
        href="https://discordapp.com/users/736139779627941919"
        style={{ color: "white" }}
        target={"_blank"}
        rel="noreferrer"
        title="Discord"
      >
        <i className="bi bi-discord m-2"></i>
      </a>
      <a
        href="https://contact.ar9157.me"
        style={{ color: "white" }}
        target={"_blank"}
        rel="noreferrer"
        title="Contact"
      >
        <i className="bi bi-person-lines-fill m-2"></i>
      </a>
      <a
        href="https://github.com/AR9157/BotWebsite"
        style={{ color: "white" }}
        target={"_blank"}
        rel="noreferrer"
        title="Code on GitHub"
      >
        <i className="bi bi-code m-2"></i>
      </a>
      <br />
      <span style={{ fontSize: "10px" }}>
        ©️ 2022 - AR9157 <br />
      </span>
    </div>
  );
}

export default Footer;
