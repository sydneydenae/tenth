<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)



    1. Create a Gatsby Site https://www.gatsbyjs.com/docs/quick-start/ 
      A) Go into local folder with all projects 
      B) Run 'npm init gatsby'
      C) cd into site
      D) Run 'gatsby build'
      D) Run 'gatsby develop'
      E) Run 'git init'
      F) Run 'git add -A'
      G) Run 'git commit -m "insert message here"
      H) Run 'git checkout -b newBranchName
      I) Run 'git remote add origin git@github.com:username/emptyRepoName.git'
      J) Run git push origin newBranchName

    2. Enable branch protection (I've taken this off for now since I'm the only contributor)
      A) Go to gitHub
      B) Click on repoName
      D) Click settings button
      E) Make sure the name of the default branch is main
      F) Scroll down to Branch Protection Rules section
      G) Select 'Add rule'
      F) Type in branch name
      G) Check the box of 'Require pull request reviews before merging' and select enable for administrators *I use this to block from submitting to main*

    3. Set up jest test framework https://jestjs.io/docs/en/getting-started.html
      A) Run 'npm install --save-dev jest'
      B) Create a sum.js file and insert stuff from supplied directions
      C) Create a sum.test.js file and insert stuff from supplied directions
      D) Add  "test": "jest" to scripts section of package.json
      E) Run 'npm run test'

    4. Set up ESLint https://eslint.org/docs/user-guide/getting-started
      A) Run 'npm install eslint --save-dev'
      B) Run 'npx eslint --init' to set up config file
      C) Select Check syntax and find problems
      D) Select JavaScript modules
      E) Select React
      F) Select No
      G) Select Browser
      H) Select JSON
      I) Select Yes

    5. Set up ESLint rules https://eslint.org/docs/rules/
      A) ESLint recommended rules are already implemented
      B) Look for other rules you want to implement
      C) Enter them in the rules section of eslintrc.json
      D) Find the correct format by looking at the specific rule

    6. Add Tailwindcss https://tailwindui.com/documentation
      A) Run 'npm install tailwindcss@latest'
      B) Run 'npx tailwindcss init'

    7. Add Inter font https://tailwindui.com/documentation
      A) Add line 'const defaultTheme = require('tailwindcss/defaultTheme' at the top of tailwindconfig file
      B) Add block
          'fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
         },
       inside of brackets for extends
      C) Add line <link rel="stylesheet" href="https://rsms.me/inter/inter.css"> to head of html page

    8. Set up components folder for Tailwind https://bradfrost.com/blog/post/atomic-web-design/
      A) Create a components folder in src
      B) Create a subfolder for each of the types of components

    9. Using config file https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
      A) Add metadata https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#sitemetadata 
      B) Feel free to add plugins, etc.