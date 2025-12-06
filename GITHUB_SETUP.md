# GitHub Pages Setup - Step by Step

## ✅ Step 1: Create GitHub Repository

1. Go to https://github.com and sign in
2. Click the **"+"** icon (top right) → **"New repository"**
3. Repository name: `portfolio` (or `aimar-haizzad-portfolio`)
4. Make it **Public** (required for free GitHub Pages)
5. **DO NOT** check any boxes (no README, no .gitignore, no license)
6. Click **"Create repository"**

## ✅ Step 2: Connect Your Local Code to GitHub

After creating the repo, GitHub will show you commands. Use these:

```bash
cd /Users/aimarhaizzad/Sites

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push your code
git branch -M main
git push -u origin main
```

**Example:** If your GitHub username is `aimarhaizzad`, the command would be:
```bash
git remote add origin https://github.com/aimarhaizzad/portfolio.git
```

## ✅ Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Scroll down to **"Pages"** (left sidebar)
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**

## ✅ Step 4: Your Site is Live!

Wait 1-2 minutes, then your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/portfolio
```

**Example:** `https://aimarhaizzad.github.io/portfolio`

---

## Quick Commands Summary

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
cd /Users/aimarhaizzad/Sites
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

Then enable Pages in GitHub Settings → Pages → Select `main` branch → Save

---

## Troubleshooting

**If you get "remote origin already exists" error:**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```

**If you need to update your site later:**
```bash
git add .
git commit -m "Update portfolio"
git push
```

