<p align="center">
  <a href="https://bobbydreamer.xyz">
    <img alt="LekoArts" src="./static/android-chrome-192x192.png" />
  </a>
</p>
<h1 align="center">
  bobbydreamer.xyz
</h1>

Welcome to my personal site!

This site is built using 🡪 GatsbyJS using starter pack from [`@lekoarts/gatsby-theme-minimal-blog`](https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog).

In this site, i post about my interests and stuff i do. 

*Update*
  * As of 31/Aug/2022, no longer updating site [bobbydreamer.com](https://bobbydreamer.com). 

## ⚙️Installation
1. Install NPM and NodeJS
2. Install gatsby CLI `npm install -g gatsby-cli`
3. Clone from [Git Repo](https://github.com/sushanth-bobby/bdxyzg4.git) : `https://github.com/sushanth-bobby/bdxyzg4.git`
4. Run `npm install` (once, only once) and never again. 
5. Temporary Issue in NodeJS18 - Issue this before any Gatsby command `set NODE_OPTIONS=--openssl-legacy-provider`

## 🥊 Development & Testing

### Development procedures

1. Create a monthly git branch and start making changes 
    ```
    # Every month create a new branch September2022(First Character Uppercase followed by year)
    Create and Checkout : git checkout -b September2022
    Checkout            : git checkout September2022
    ```

2. Test the site
    ```
    gatsby clean                # Deletes .cache, public folders    
    gatsby develop --verbose    # For verbose outputs(preferred)
    gatsby develop              # Less outputs
    ```

3. Open browser of your choice as the site is running at 
    ```
    http://localhost:8000/
    ```

4. Save your progress
    ```
    # After all changes. Commit in the monthly branch. When needed to merge do the following
    git add .
    git commit -m "September 2022 Update"
    ```

5. DO REMEMBER : Always stay in the monthly branch
    ```
    git checkout September2022
    ```

### Posts usage

* Emojis    
  - 🡲 🡐 ⯬ ⟿  ⋙ ⋘ ⫸ ⫷ ⚡ 🌟 ❤️ ☠️ 🔥 💀 ☪ ⭐ ⁂ 🟌 ✓ ✔ ⨝ ⴵ 🚀

* Created on : Consider post date as 'Last updated' and use below 'created on' to mention when the actual post was created on. 
  - Sample : **Created on**: 2020-10-06    


## 🚀 Deployment

I am using google firebase hosting for deployment and follow instructions in this [link](https://www.gatsbyjs.org/docs/deploying-to-firebase/). 

1. Merge the change from feature branch to master/main 
    ```
    git checkout main
    git merge September2022 -m "Merging September 2022 : Update 1"
    ```

2. Prepare Gatsby Deployment 
    ```
    gatsby clean
    gatsby build --verbose
    gatsby serve
    ```

3. Verify the counts of links in Chrome Console as sometimes it tend to miss pages without warning. Basically go to chrome and inspect on a blog link and get the CSS class value and paste that below, its dynamic. It changes, so for every build there will be new one. Get the count and see "Is that the number of pages you have in your site". If YES, proceed to next step. 

    ```
    document.querySelectorAll(".css-1dkmnim").length
    ```

4. Deploy to Firebase Hosting 
    ```
    firebase serve --only hosting
    firebase deploy -m "September 2022 : Update 1"
    ```

5. Push the changes to GitHub
    ```
    git add . 
    git commit -m "September 2022 : Update 1"
    git push 
    
    # DONT DO THIS AFTER GIT PUSH : When some files are forgotten to add
    git add .
    git commit --amend --no-edit
    ```


## 🌟 Thanks for visiting my site and Github Repo

