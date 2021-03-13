## All recorded steps for building Tenth

1. **Create a Gatsby Site** https://www.gatsbyjs.com/docs/quick-start/
      1. Go into local folder with all projects 
      2. Run `npm init gatsby`
      3. cd into site
      4. Run `gatsby build`
      5. Run `gatsby develop`
      6. Run `git init`
      7. Run `git add -A`
      8. Run `git commit -m "insert message here"`
      9. Run `git checkout -b newBranchName`
      10. Run `git remote add origin git@github.com:username/emptyRepoName.git`
      11. Run `git push origin newBranchName`

2. **Enable branch protection** (I've taken this off for now since I'm the only contributor)
      A) Go to gitHub
      B) Click on repoName
      D) Click settings button
      E) Make sure the name of the default branch is main
      F) Scroll down to Branch Protection Rules section
      G) Select 'Add rule'
      F) Type in branch name
      G) Check the box of 'Require pull request reviews before merging' and select enable for administrators *I use this to block from submitting to main*

3. **Set up jest test framework** https://jestjs.io/docs/en/getting-started.html
      A) Run `npm install --save-dev jest`
      B) Create a sum.js file and insert stuff from supplied directions
      C) Create a sum.test.js file and insert stuff from supplied directions
      D) Add  "test": "jest" to scripts section of package.json
      E) Run `npm run test`

4. **Set up ESLint** https://eslint.org/docs/user-guide/getting-started
      A) Run `npm install eslint --save-dev`
      B) Run `npx eslint --init' to set up config file`
      C) Select Check syntax and find problems
      D) Select JavaScript modules
      E) Select React
      F) Select No
      G) Select Browser
      H) Select JSON
      I) Select Yes

5. **Set up ESLint rules** https://eslint.org/docs/rules/
      A) ESLint recommended rules are already implemented
      B) Look for other rules you want to implement
      C) Enter them in the rules section of eslintrc.json
      D) Find the correct format by looking at the specific rule

6. **Add Tailwindcss** https://tailwindui.com/documentation
      A) Run `npm install tailwindcss@latest`
      B) Run `npx tailwindcss init`

7. **Add Inter font** https://tailwindui.com/documentation
      A) Add line 'const defaultTheme = require('tailwindcss/defaultTheme' at the top of tailwindconfig file
      B) Add block
         fontFamily: {
         sans: ['Inter var', ...defaultTheme.fontFamily.sans],
         },
       inside of brackets for extends
      C) Add line `<link rel="stylesheet" href="https://rsms.me/inter/inter.css">` to head of html page

8. **Set up components folder for Tailwind** https://bradfrost.com/blog/post/atomic-web-design/
      A) Create a components folder in src
      B) Create a subfolder for each of the types of components
      
9. **Install React/Tailwind chrome extension** https://chrome.google.com/webstore/detail/tailwind-ui-react/binfindfddkgfibeajgkmjioklcgigjn?hl=en-US

10. **Begin bubilding UI components** https://tailwindui.com/components#product-application-ui
      1. Button Example
            1. Create a button.js file within the atoms folder
            2. Build in the skeleton for a typical React export
            3. Copy the code from the component on the Tailwind site (Make sure the extension is on)
            4. Paste code into the JS file

9. **Using config file** https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
      A) Add metadata https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#sitemetadata 
      B) Feel free to add plugins, etc.
      

