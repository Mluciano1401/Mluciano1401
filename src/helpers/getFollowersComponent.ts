import { Octokit } from "octokit"

const url = "https://api.github.com/user/followers"

const apiKey  = process.env.TOKEN;

const getFollowers = async (): Promise<any> => {
  const octokit = new Octokit({
    auth: apiKey
  })
 
  const { data } = await octokit.request(url, {});

  return data
}

export default getFollowers
