# SOC Portfolio — GitHub Pages Setup

This is a Vite + React project, pre-configured to deploy to:
https://WiLL75G.github.io/portfolio

## 1. Install dependencies
```
npm install
```

## 2. Test locally (optional)
```
npm run dev
```
Opens at http://localhost:5173

## 3. Create the GitHub repo
Go to https://github.com/new and create a repo named exactly: portfolio
(Public, no README/license — this project already has files)

## 4. Push this project
```
git init
git add -A
git commit -m "Initial SOC portfolio"
git branch -M main
git remote add origin https://github.com/WiLL75G/portfolio.git
git push -u origin main
```

## 5. Deploy to GitHub Pages
```
npm run deploy
```
This builds the project and pushes the /dist folder to a gh-pages branch automatically.

## 6. Enable GitHub Pages
- Go to your repo → Settings → Pages
- Under "Build and deployment" → Source: select "Deploy from a branch"
- Branch: select gh-pages, folder: / (root)
- Save

Your site goes live at: https://WiLL75G.github.io/portfolio
(can take 1-2 minutes the first time)

## 7. Add to LinkedIn
Profile → Add section → Featured → Add a link
Paste: https://WiLL75G.github.io/portfolio
