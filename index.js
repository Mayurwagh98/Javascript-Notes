const API_URl = "https://api.github.com/users/Mayurwagh98";

async function handlePromise() {
  try {
    const data = await fetch(API_URl);

    const jsonResponse = await data.json();

    console.log(jsonResponse);
  } catch (error) {
    console.log(error);
  }
}

handlePromise();
