import axios from "axios";

const url = "https://api.github.com/user/followers"

const apiKey  = process.env.TOKEN;

const getFollowers = async (): Promise<any> => {

  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })

  return data
}

export default getFollowers
