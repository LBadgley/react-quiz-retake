import React from 'react';
import PropTypes from 'prop-types';
// need to get header and footer text from this to pass to Display
export default function TextSelector({ headerText, footerText, handleChange }) {
  return (
    <>
      <label htmlFor="headerText-input">Type something for the Header here: </label>
      <input name="header-text" type="text" value={headerText} id="headerText-input" onChange={handleChange}></input>
      <label htmlFor="footerText-input">Type something for the footer: </label>
      <input name="footer-text" type="text" value={footerText} id="footerText-input" onChange={handleChange}></input>
    </>
  );
}

TextSelector.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
