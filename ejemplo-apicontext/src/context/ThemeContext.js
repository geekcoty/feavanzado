import React from "react";

//creamos el contexto. siempre con un obj vacio
const ThemeContext = React.createContext({});

//se crea y exporta el provider name export se importa entre llaves
export const ThemeProvider = ThemeContext.Provider;

// se exporta el contexto. default export se importa sin llaves
export default ThemeContext;