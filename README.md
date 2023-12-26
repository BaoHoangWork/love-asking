# Create React App & Remote to Github
Source:
https://stackoverflow.com/questions/69864790/how-to-push-entire-react-folder-to-github
https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github
https://alvinalexander.com/git/git-show-change-username-email-address/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 1. Create local react project


### `npx create-react-app <project-name>`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## 2. Create github Repository


Create react project with the same name as <project-name>
(It does not matter the name right now but it will make the process of commit later easier to follow through)


## 3. Setup git in local project

### 3.1 `git config user.email <email>`
Change both email and username for better clarification 
Double check --global first to see which user we are using first - there is also an option of changing email per project (discuss in another project)

### 3.2 `git branch -m main`
Change local branch name from "master" (usual name for branch of react) to "main" (personal favourite name for center branch)

### 3.3 `git add .` & `git commit -m "<message>"`
Make local commit

### 3.4 `git remote add origin https://github.com/<git-name>/<git-repo-name>`
Add remote to github

### 3.5 `git pull origin main --allow-unrelated-histories`
The tag "--allow-unrelated-histories" is used when the error "fatal: refusing to merge unrelated histories" happened
--> this will cause conflicts - fix then add & commit similar to 3.3

### 3.6 `git push origin main`
Should be successful


# Deploy React project using gh-pages

## 1. Install gh-pages package

### `npm install gh-pages --save-dev`

## 2. Configure package.json
Include property "homepage" with the value https://<github-name>.github.io/<repo-name>

### `"predeploy" : "npm run build"` & `"deploy" : "gh-pages -d build"`
Add these to "scripts" property

## 3. Run build
After add ., commit & push -> run the command
### `npm run deploy`
This will check deploy info and push deployable version to new branch name gh-pages

## 4. On github pages
Setup to run website from branch gh-pages -> result