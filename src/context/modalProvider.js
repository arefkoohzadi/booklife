import React, { useState } from "react";

export const ModalContext = React.createContext();
export const ModalSetStateContext = React.createContext();

const ModalProvider = ({ children }) => {
  const [openSideDrawer, setOpenSideDrawer] = useState(false);

  return (
    <ModalContext.Provider value={openSideDrawer}>
      <ModalSetStateContext.Provider value={setOpenSideDrawer}>
        {children}
      </ModalSetStateContext.Provider>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
