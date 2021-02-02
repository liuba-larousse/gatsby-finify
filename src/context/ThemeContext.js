/** @format */
import React from 'react';
const defaultState = {
  light: false,
  toggleDark: () => {},
};
const ThemeContext = React.createContext(defaultState);
// Getting light mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: light)')
    .matches === true;
class ThemeProvider extends React.Component {
  state = {
    light: false,
  };
  toggleDark = () => {
    let light = !this.state.light;
    localStorage.setItem('light', JSON.stringify(light));
    this.setState({ light });
  };
  componentDidMount() {
    // Getting light mode value from localStorage!
    const lsLight = JSON.parse(
      localStorage.getItem('light')
    );
    if (lsLight) {
      this.setState({ light: lsLight });
    } else if (supportsDarkMode()) {
      this.setState({ light: true });
    }
  }
  render() {
    const { children } = this.props;
    const { light } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          light,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContext;
export { ThemeProvider };
