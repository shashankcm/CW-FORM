const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


export default (async function showResults(values) {

  //submitToServer(values);
  await sleep(500); // simulate server latency
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});


async function submitToServer(data) {



  try {
    let response = await fetch('http://localhost:3003/api/form', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    let responseJSON = await response.JSON();
    return responseJSON;
  } catch (error) {
    console.error();
  }

}