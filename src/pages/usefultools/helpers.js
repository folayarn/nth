//function to handle shortening of text to display
export const shortenText = (str, maxLen, separator = " ") => {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen)) + " ...";
};
