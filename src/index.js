// callbacks example

// as functions are first class functions

function mainFunc(fname, lname, callback) {
  let obj = {
    fname: fname,
    lname: lname
  };
  callback(obj);
}

function printMyInfoC(myInfo) {
  console.log(`Callback FirstName: ${myInfo.fname} LastName:${myInfo.lname}`);
}

mainFunc("Rohu", "Gajbhiye", printMyInfoC);
//printMyInfo is common for both callback and promises
// -------------------------------------------------

function printMyInfoP(myInfo) {
  console.log(`Promises FirstName: ${myInfo.fname} LastName:${myInfo.lname}`);
}

function prom(fname, lname) {
  return new Promise((reso, rej) => {
    reso({ fname, lname });
  });
}
prom("Rohu", "Gajbhiye")
  .then((res) => printMyInfoP(res))
  .catch((err) => console.log(err));

//------------------------------------------------------
//async and await

function printMyInfoA(myInfo) {
  console.log(
    `Async and Await FirstName: ${myInfo.fname} LastName:${myInfo.lname}`
  );
}

async function doStuff(fname, lname) {
  let y = await prom(fname, lname);
  // console.log(y);
  let z = printMyInfoA(y);
  console.log(z);
}
doStuff("Rohu", "Gajbhiye");
