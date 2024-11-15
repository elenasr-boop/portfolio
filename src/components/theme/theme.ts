export type ThemeType = {
    background: string,
    text: string,
    headline: string,
    button: string,
    buttonHover: string,
    additionaly: string,
}

export const lightTheme: ThemeType = {
  background: "#F4F4F4",
  text: "#2C3E50",
  headline: "#8A2BE2",
  button: "#D8B7DD",
  buttonHover: "#8A2BE2",
  additionaly: "#A1E3D8",
};

export const darkTheme: ThemeType = {
  background: "#2C3E50",
  text: "#F4F4F4",
  headline: "#8A2BE2",
  button: "#A1E3D8",
  buttonHover: "#8A2BE2",
  additionaly: "#F7D1D1",
};
