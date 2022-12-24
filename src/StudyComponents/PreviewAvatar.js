import React, { useEffect, useState } from "react";

function PreviewAvatar() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar);
    };
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    console.log(URL.createObjectURL(file));
    setAvatar(URL.createObjectURL(file));
  };

  return (
    <div>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar} width="80%" alt="pic" />}
    </div>
  );
}

export default PreviewAvatar;
