/*
Write a function that given an input URL, returns its domain name.
*/
const domainName = (url) => {
  // Your solution
  if (url.indexOf("https://") === 0) {
    url = url.slice(8);
  } else if (url.indexOf("http://") === 0) {
    url = url.slice(7);
  }

  if (url.indexOf("www.") === 0) {
    url = url.slice(4);
  }

  const domain = url.split(".");
  const domainName = domain[0];

  return domainName;
};

console.log(domainName("www.google.ca")); // google
console.log(domainName("http://google.com")); // google
console.log(domainName("https://google.com")); // google
console.log(domainName("http://google.co.jp")); // google
console.log(domainName("https://www.google.com")); // google
