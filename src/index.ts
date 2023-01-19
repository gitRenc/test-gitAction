import { Octokit } from "octokit";

// TOKEN -- Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ 
    auth: `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 ` 
});
// DATA INFO
// owner        : git repo owner
// repo         : git repo
// workflow_id  : workflow filename in .github/workflow 
// ref          : branch
//
const response = await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
    owner: 'gitRenc',
    repo: 'test-gitAction',
    workflow_id: 'main.yml',
    ref: 'main'
  })

// should be return 204
console.log(response.status);

