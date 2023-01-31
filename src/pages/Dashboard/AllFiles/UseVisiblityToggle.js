import React, { useState } from "react";

import FileSystem from "../FileSystem/FileSystem";

const UseVisiblityToggle = (component, visiblity = false) => {
  const [visible, setVisiblity] = useState(() => visiblity);

  return [visible ? component : <FileSystem />, () => setVisiblity((v) => !v)];
};

export default UseVisiblityToggle;
