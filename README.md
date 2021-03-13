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
      1. Go to gitHub
      2. Click on repoName
      3. Click settings button
      4. Make sure the name of the default branch is main
      5. Scroll down to Branch Protection Rules section
      6. Select 'Add rule'
      7. Type in branch name
      8. Check the box of 'Require pull request reviews before merging' and select enable for administrators *I use this to block from submitting to main*

3. **Set up jest test framework** https://jestjs.io/docs/en/getting-started.html
      1. Run `npm install --save-dev jest`
      2. Create a sum.js file and insert stuff from supplied directions
      3. Create a sum.test.js file and insert stuff from supplied directions
      4. Add  "test": "jest" to scripts section of package.json
      5. Run `npm run test`

4. **Set up ESLint** https://eslint.org/docs/user-guide/getting-started
      1. Run `npm install eslint --save-dev`
      2. Run `npx eslint --init' to set up config file`
      3. Select Check syntax and find problems
      4. Select JavaScript modules
      5. Select React
      6. Select No
      7. Select Browser
      8. Select JSON
      9. Select Yes

5. **Set up ESLint rules** https://eslint.org/docs/rules/
      1. ESLint recommended rules are already implemented
      2. Look for other rules you want to implement
      3. Enter them in the rules section of eslintrc.json
      4. Find the correct format by looking at the specific rule

6. **Add Tailwindcss** https://tailwindui.com/documentation
      1. Run `npm install tailwindcss@latest`
      2. Run `npx tailwindcss init`

7. **Add Inter font** https://tailwindui.com/documentation
      1. Add line 'const defaultTheme = require('tailwindcss/defaultTheme' at the top of tailwindconfig file
      2. Add block inside of the extends section brackets
         ```fontFamily: {
         sans: ['Inter var', ...defaultTheme.fontFamily.sans],
         },
      3. Add line `<link rel="stylesheet" href="https://rsms.me/inter/inter.css">` to head of html page

8. **Set up components folder for Tailwind** https://bradfrost.com/blog/post/atomic-web-design/
      1. Create a components folder in src
      2. Create a subfolder for each of the types of components
      
9. **Install React/Tailwind chrome extension** https://chrome.google.com/webstore/detail/tailwind-ui-react/binfindfddkgfibeajgkmjioklcgigjn?hl=en-US

10. **Begin bubilding UI components** https://tailwindui.com/components#product-application-ui
      1. Button Example
            1. Create a button.js file within the atoms folder
            2. Write in the skeleton for a typical React export function
            3. Copy the code from the component on the Tailwind site (Make sure the extension is on)
            4. Paste code into the JS file
            ```
            import React from "react"
            
               export default function Button(){
                 return(
                  <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm                   font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none                       focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Click Me!
                  </button>
                  )
               }
               
11. **How to display UI elements**
      1. Create a *pageName.js* file in the src/pages folder
      2. Write import *elementName* from *filepath* at the top
      3. Write in the skeleton for a typical react export function
      4. Insert <elementName/> in the inside the return parentheses

9. **Using config file** https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
      1. Add metadata https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#sitemetadata 
      2. Feel free to add plugins, etc.
      

