const fetchData = callback => {
  setTimeout(() => {
    callback("done callback");
  }, 1500);
};

setTimeout(() => {
  console.log("timer is done");
  fetchData(text => {
    console.log("fetch data:", text);
  });
}, 2000);

console.log("hello");
console.log("hi");

// promise version
const fetchData2 = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise timer done");
      resolve("done promise");
    });
  });
  return promise;
};

fetchData(console.log);

setTimeout(() => fetchData2().then(text => console.log(text)), 2000);
