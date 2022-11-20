import Image from "next/image";
import QRCode from "qrcode";
import { useState } from "react";

const QRHomePage = () => {
  const [username, setUsername] = useState("");
  const [githubCode, setGithubCode] = useState("");

  const generate = () => {
    QRCode.toDataURL(`https://github.com/${username}`).then(setGithubCode);
  };

  return (
    <>
      <div className="">
        <h1>Generate a Github QR Code</h1>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={generate}>Generate!</button>
      </div>
      <div className="qrcode">
        <Image
          src={githubCode}
          alt=""
          width={320}
          height={320}
          className="qrcode"
        />
      </div>
    </>
  );
};

export default QRHomePage;
