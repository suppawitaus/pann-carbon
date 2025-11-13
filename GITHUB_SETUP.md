# GitHub Setup Guide for PANN CARBON

This guide will help you initialize and push your PANN CARBON project to GitHub.

## Prerequisites

- Git installed on your system
- GitHub account created
- GitHub CLI (optional, but helpful) or access to GitHub web interface

## Step 1: Initialize Git Repository (if not already done)

```bash
# Navigate to project directory
cd "D:\witty\Projects\pann carbon"

# Initialize git repository (if not already initialized)
git init

# Check current status
git status
```

## Step 2: Create GitHub Repository

### Option A: Using GitHub Web Interface (Recommended for first-time)

1. Go to https://github.com/new
2. Repository name: `pann-carbon` (or your preferred name)
3. Description: "Climate Insurtech Broker - EV data to carbon credits to insurance discounts"
4. Visibility: Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Option B: Using GitHub CLI

```bash
# Install GitHub CLI if not installed: https://cli.github.com/

# Authenticate (first time only)
gh auth login

# Create repository
gh repo create pann-carbon --public --description "Climate Insurtech Broker - EV data to carbon credits to insurance discounts"
```

## Step 3: Add Remote and Push

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/pann-carbon.git

# Or if using SSH:
# git remote add origin git@github.com:YOUR_USERNAME/pann-carbon.git

# Stage all files
git add .

# Create initial commit
git commit -m "Initial commit: PANN CARBON - Climate Insurtech Broker

- React + TypeScript + Vite frontend
- Multi-language support (EN/TH)
- Technology, Business & Market, and ESG & Policy research pages
- Ready for Google Cloud deployment"

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Verify

1. Visit your repository on GitHub: `https://github.com/YOUR_USERNAME/pann-carbon`
2. Verify all files are present
3. Check that `.gitignore` is working (node_modules, dist, etc. should not be visible)

## Step 5: Set Up Branch Protection (Optional but Recommended)

1. Go to repository Settings → Branches
2. Add rule for `main` branch:
   - Require pull request reviews before merging
   - Require status checks to pass
   - Include administrators

## Step 6: Add Repository Topics and Description

1. Click on the gear icon next to "About" section
2. Add topics: `react`, `typescript`, `vite`, `climate-tech`, `insurtech`, `carbon-credits`, `thailand`
3. Update website URL if you have one deployed

## Step 7: Create Initial Release (Optional)

```bash
# Tag the initial release
git tag -a v1.0.0 -m "Initial release: PANN CARBON MVP"

# Push tags
git push origin v1.0.0
```

Then on GitHub:
1. Go to Releases → Draft a new release
2. Choose tag `v1.0.0`
3. Add release notes
4. Publish release

## Future Workflow

### Making Changes

```bash
# Create a new branch for features
git checkout -b feature/your-feature-name

# Make changes, then:
git add .
git commit -m "Description of changes"
git push origin feature/your-feature-name

# Create Pull Request on GitHub
```

### Updating Main Branch

```bash
# Switch to main
git checkout main

# Pull latest changes
git pull origin main

# Merge your feature branch (or use GitHub PR)
git merge feature/your-feature-name
git push origin main
```

## Troubleshooting

### If you get "remote origin already exists":
```bash
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/YOUR_USERNAME/pann-carbon.git
```

### If you need to update .gitignore after files are tracked:
```bash
# Remove files from git cache but keep locally
git rm -r --cached node_modules
git rm -r --cached dist

# Commit the changes
git add .gitignore
git commit -m "Update .gitignore"
git push origin main
```

### If you want to start fresh:
```bash
# WARNING: This removes all git history
rm -rf .git
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/pann-carbon.git
git push -u origin main --force
```

## Next Steps

1. Set up GitHub Actions for CI/CD (see `DEPLOYMENT.md`)
2. Add issue templates
3. Set up project board
4. Add collaborators if working in a team

