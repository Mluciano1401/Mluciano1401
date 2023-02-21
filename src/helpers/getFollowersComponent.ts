import { Octokit } from "octokit"

const url = "https://api.github.com/user/followers"

const args = process.argv.slice(2)

const apiKey = args[0]

const getFollowers = async (): Promise<any> => {
  const octokit = new Octokit({
    auth: apiKey
  })
 
  const { data } = await octokit.request(url, {});

  return data
}

export default getFollowers
