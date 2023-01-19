import { Octokit } from "octokit";
const octokit = new Octokit({ auth: `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` });
const { data: { login }, } = await octokit.rest.users.getAuthenticated();
console.log("Hello, %s", login);
//# sourceMappingURL=index.js.map