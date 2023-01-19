import { Octokit, App } from "octokit";
import { data } from "./test.js";

// TOKEN -- Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ 
    auth: `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` 
});

// await octokit.request('GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}', {
//     owner: 'gitRenc',
//     repo: 'test-gitAction',
//     workflow_id: 'node CI'
//   })
// const response = await octokit.request('GET /repos/gitRenc/test-gitAction/actions/workflows/main.yml')
// const {
//     data: { login },
//   } = await octokit.rest.users.getAuthenticated();

const response = await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
    owner: 'gitRenc',
    repo: 'test-gitAction',
    workflow_id: 'main.yml',
    ref: 'main',
    
  })

  console.log(response);
//   console.log("Hello, %s", data.name);

