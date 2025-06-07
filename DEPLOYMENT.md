# Vercel Deployment Checker

This project includes automatic deployment URL checking for Vercel deployments.

## 🚀 Features

### 1. Automatic Post-Push Hook
After every `git push`, the system will automatically:
- Check if the repository has a Vercel deployment
- Fetch the latest deployment URL
- Display the URL in the terminal
- Copy the URL to your clipboard (macOS)

### 2. Manual Deployment Check
You can manually check the deployment status using:

```bash
# Using npm script
npm run deployment:check

# Or run the script directly
node check-deployment.js
```

## 📋 Setup Requirements

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy your project** (if not deployed yet):
   ```bash
   vercel
   ```

## 🔧 How It Works

### Git Hook (Automatic)
- Located at: `.git/hooks/post-push`
- Runs automatically after `git push`
- Checks for `.vercel/` directory or `vercel.json` file
- Uses Vercel CLI to fetch deployment information

### Manual Script
- Located at: `check-deployment.js`
- Can be run anytime to check current deployment status
- Provides detailed deployment information including:
  - Deployment URL
  - Last update time
  - Project name
  - Automatic clipboard copy (macOS)

## 🎯 Example Output

```bash
🚀 Checking Vercel deployment status...

✅ Deployment found!
🌐 URL: https://your-project-abc123.vercel.app
⏰ Last updated: 2h
📦 Project: example-counter
📋 URL copied to clipboard!

🎉 Check complete!
```

## 🛠️ Troubleshooting

### "Vercel CLI not found"
- Install Vercel CLI: `npm install -g vercel`

### "No Vercel deployment detected"
- Make sure you've deployed your project: `vercel`
- Check if `.vercel/` directory exists

### "Error fetching deployment info"
- Make sure you're logged in: `vercel login`
- Verify you have access to the Vercel project

### Hook not running
- Make sure the hook is executable: `chmod +x .git/hooks/post-push`
- Note: Git hooks only work with `git push`, not GitHub Desktop

## 🔗 Integration Ideas

You can extend this system to:
- Send deployment URLs to Slack/Discord
- Update project documentation automatically
- Trigger additional post-deployment tasks
- Log deployment history

## 📝 Customization

Edit the scripts to:
- Change output formatting
- Add different notification methods
- Integrate with other deployment platforms
- Add deployment health checks 