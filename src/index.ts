import { Octokit, App } from "octokit";
import { data } from "./test.js";


const octokit = new Octokit({ auth: `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` });
const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();


  console.log("Hello, %s", login);
  console.log("Hello, %s", data.name);