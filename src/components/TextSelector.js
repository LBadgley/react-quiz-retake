import React from 'react';
import PropTypes from 'prop-types';
// need to get header and footer text from this to pass to Display
function TextSelector({ headerText, footerText, image, handleChange }) {
  return (
    <>
      <label htmlFor="headerText-input">Type something for the Header here: </label>
      <input name="headerText" type="text" value={headerText} id="headerText-input" onChange={handleChange} />
      <label htmlFor="image">image</label>
      <input name="image" type="text" value={image} id="image" onChange={handleChange} />
      <label htmlFor="footerText-input">Type something for the footer: </label>
      <input name="footerText" type="text" value={footerText} id="footerText-input" onChange={handleChange} />
    </>
  );
}

TextSelector.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired
};

export default TextSelector;
