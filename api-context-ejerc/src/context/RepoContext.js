import React from "react";

const RepoContext = React.createContext({});

export const RepoProvider = RepoContext.Provider;
export default RepoContext;