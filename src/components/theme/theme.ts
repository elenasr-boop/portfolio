export type ThemeType = {
  background: string;
  text: string;
  headline: string;
  additionaly: string;
  link: string;
  linkHover: string;
  linkActive: string;
  buttonBackground: string, 
  buttonText: string, 
  buttonHoverBackground: string,
  buttonActiveBackground: string, 
  buttonDisabledBackground: string, 
  buttonDisabledText: string, 
  boxShadow: string,
  hoverBoxShadow: string,
  toggleTheme: string, 
  sunmoonTop: string,
  sunmoonLeft: string,
  sunmoonBg: string,
};

export const lightTheme: ThemeType = {
  background: "#F4F4F4",
  text: "#2C3E50",
  headline: "#8A2BE2",
  additionaly: "#A1E3D8",
  link: "#8A2BE2",
  linkHover: "#A1E3D8",
  linkActive: "#D8B7DD",
  buttonBackground: "#A1E3D8",
  buttonText: "#2C3E50", 
  buttonHoverBackground: "#8A2BE2", 
  buttonActiveBackground: "#A1E3D8",
  buttonDisabledBackground: "#333333", 
  buttonDisabledText: "#666666", 
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  hoverBoxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
  toggleTheme: "0vh",
  sunmoonTop: "-72%",
  sunmoonLeft: "-72%",
  sunmoonBg: "#FFCE54",
};

export const darkTheme: ThemeType = {
  background: "#2C3E50",
  text: "#F4F4F4",
  headline: "#8A2BE2",
  additionaly: "#F7D1D1",
  link: "#A1E3D8",
  linkHover: "#D8B7DD",
  linkActive: "#8A2BE2",
  buttonBackground: "#D8B7DD", 
  buttonText: "#2C3E50", 
  buttonHoverBackground: "#8A2BE2",
  buttonActiveBackground: "#D8B7DD", 
  buttonDisabledBackground: "#E0E0E0", 
  buttonDisabledText: "#A0A0A0", 
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  hoverBoxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  toggleTheme: "-200vh",
  sunmoonTop: "-20%",
  sunmoonLeft: "-30%",
  sunmoonBg: "#FFF3D8"  
};
