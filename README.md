## What to run
1. nvm install
2. nvm use
3. npm install
4. npm run build
5. npm test
6. npm start



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

3. **Create .nvmrc file**
      1. Create a file in the main Cerebro folder called .nvmrc
      2. On line 1 write `14.16.0` or whatever the stabe version of node is at the time
      3. All done! When opening up the project, run `nvm install` and then `nvm use` to ensure you're using the right version

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

6. **Add Tailwindcss** https://tailwindui.com/documentation https://www.gatsbyjs.com/docs/how-to/styling/tailwind-css/ 
      1. Run `npm install tailwindcss@latest`
      2. Run `npx tailwindcss init`
      3. Run `npm install postcss gatsby-plugin-postcss`
      4. Add the plugin to gatsby-config.js file
      ```
      *gatsby-config.js file*
      module.exports = {
      siteMetadata: {
            title: `Tenth`,
            siteUrl: `https://www.tenth.com`,
            description: `A website about the top 10%`,
            },

      plugins: [
            `gatsby-plugin-postcss`
      ],
      }

7. **Add Inter font** https://tailwindui.com/documentation
      1. Add line 'const defaultTheme = require('tailwindcss/defaultTheme' at the top of tailwindconfig file
      2. Add block inside of the extends section brackets
         ```
         fontFamily: {
         sans: ['Inter var', ...defaultTheme.fontFamily.sans],
         },
      3. Add line `<link rel="stylesheet" href="https://rsms.me/inter/inter.css">` to head of html page

8. **Set up components folder for Tailwind** https://bradfrost.com/blog/post/atomic-web-design/
      1. Create a components folder in src
      2. Create a subfolder for each of the types of components

9. **Setting up 1st CSS file**
      1. Create a styles.css file in the src section
      2. Paste this code
      ```
            @tailwind base;

            @tailwind components;

            @tailwind utilities;

10. **Setting up 2nd CSS file and building**
      1. Create an output.css file in the src/pages section
      2. Go to the package.json and add `"build:css": "tailwind build src/style.css -o src/pages/output.css"` in the scripts section
      3. Run `npm run build:css in the terminal`
      4. There should be new code present in the output.css file
      5. Go to index.js file and add the line `import "./output.css"` under the other imports if any

      
11. **Install React/Tailwind chrome extension** https://chrome.google.com/webstore/detail/tailwind-ui-react/binfindfddkgfibeajgkmjioklcgigjn?hl=en-US

12. **Begin bubilding UI components** https://tailwindui.com/components#product-application-ui
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
               
13. **How to display UI elements on a page**
      1. Create a *pageName.js* file in the src/pages folder
      2. Write import *elementName* from *filepath* at the top
      3. Write in the skeleton for a typical react export function
      4. Insert <elementName/> in the inside the return parentheses
      5. Repeat this for any elements you'd like to include from the Tailwind site
      ```
      import React from "react"
      import Button from "../components/atoms/button"

      function TestPage(){
            return(
              <div>
              <title>Test Page</title>
              <Button/>
              </div>
            )
         }
      export default TestPage
      
14. **Displaying Pages**
      1. Go to the index.js page
      2. Import *pageName* from *filePath*
      3. Write in the skeleton for an index export function
      4. Insert <pageName/> inside main tags
      5. Make sure the output.css file is imported into the page
      ```
      import * as React from "react"
      import TestPage from "./testPage"
      import "./output.css"

      // markup
      const IndexPage = () => {
      return (
            <main>
                  <TestPage/>
            </main>
      )
      }
      export default IndexPage

15. **Using config file** https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
      1. Add metadata https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#sitemetadata 
      2. Feel free to add plugins, etc.

16. Creating Custom Tailwind Colors
      1. Go to https://www.tailwindshades.com/ 
      2. Insert hex for the base color
      3. Copy Tailwind code for the color in section 3 called "Get Code"

17. **Adding Custom colors**    
      1. Go to the tailwindconfig.js file
      2. Find the extends section within the theme section
      3. create a colors section within the extends section
      4. Paste color code in the section
      5. Change the name if necessary
      6. Re-build the css and launch the site again
      7. Use them the same way you would other colors
      ```
      colors: {
        'mmb': {
          DEFAULT: '#1481BA',
          '50': '#BCE3F8',
          '100': '#A5DAF5',
          '200': '#77C7F0',
          '300': '#49B3EB',
          '400': '#1BA0E6',
          '500': '#1481BA',
          '600': '#0F618C',
          '700': '#0A415E',
          '800': '#052130',
          '900': '#000102'
        },
      },

18. **Testing Components with Jest: Unit testing setup** https://www.gatsbyjs.com/docs/how-to/testing/unit-testing 
      1. Follow linked guide to set up jest with Gatsby (Stop right before step 3 and you don't need to do anything with creating a mock folder or mock files)
      2. Follow this guide to set testing for React components https://www.gatsbyjs.com/docs/how-to/testing/testing-react-components/ (Stop when you reach 'Usage' section)
      3. It get's a little confusing so I will provide a sample of what your jest.config.js file should look like below
      2. Create a component.test.js file in the same folder as whatever component you are testing
      3. Import react, the component, and the renderer as shown below
      4. Create a section called `describe("*componentName*", () =>{*tests go here*})` to hold all tests for button
      ```
      *jest.config.js file*
      module.exports = {
            transform: {
                  "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
            },
            moduleNameMapper: {
                  ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
                  ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
            },
            testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
            transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
            globals: {
                  __PATH_PREFIX__: ``,
            },
            testURL: `http://localhost`,
            setupFiles: [`<rootDir>/loadershim.js`],
            setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
      } 

      *in button.test.js file*
      import React from "react"
      import Button from "./button"
      import { render } from "@testing-library/react"

      describe("Button", () => {
    
      })

19. **Testing Components with Jest**  https://www.robinwieruch.de/react-testing-library 
      1. Read through the article and employ necessary tests
      ```
      import React from "react"
      import Button from "./button"
      import { render, screen } from "@testing-library/react"

      describe("Button", () => {
      test('renders Button component', () => {
            render(<Button />);

            screen.debug();
            expect(screen.getByText(/Click Me!/)).toBeInTheDocument();
            expect(screen.getByRole(`button`)).toBeInTheDocument();
      });
      })

