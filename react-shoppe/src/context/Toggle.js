import React from "react"

const ToggleContext = React.createContext(true);

export const ToggleProvider = ToggleContext.Provider;
export default ToggleContext;