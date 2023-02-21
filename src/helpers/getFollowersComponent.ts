import { Octokit } from "octokit"

const url = "https://api.github.com/user/followers"

const args = process.argv.slice(2)

const apiKey = args[0]

const getFollowers = async (): Promise<any> => {
  const octokit = new Octokit({
    auth: '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'
  })
 
  const { data } = await octokit.request(url, {});

  return data
}

export default getFollowers
