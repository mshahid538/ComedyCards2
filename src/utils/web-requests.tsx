import axios from 'axios';

const endpoint = 'https://fqwut0e1fl.execute-api.us-east-1.amazonaws.com/dev';

export async function fetchData() {
    console.log("fetchData; ");

    //*
    const response = await axios.get(endpoint +"/new-cards");
    console.log("response: ", response);
    //*/
}