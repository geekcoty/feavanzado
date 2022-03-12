export const useLocalStorage= () => {


  const handleSave = (startupInfo) => {
  //getter
  //hacemos un ternario para validar la existencia de mi clave
  const startups =  localStorage.getItem("startups") ?? [];

  const parsedStartups = typeof startups == "string" ? JSON.parse(startups) : startups;

  parsedStartups.push(startupInfo)
  
  const stringifiedStartups = JSON.stringify(parsedStartups)
  
  localStorage.setItem("startups", stringifiedStartups)
  };

  //getter
  const getStartups = localStorage.getItem("startups")
  const parsedStartups = JSON.parse(getStartups)

  return [parsedStartups,handleSave];
};