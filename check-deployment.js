#!/usr/bin/env node

const { execSync, exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

async function checkVercelDeployment() {
  log('🚀 Checking Vercel deployment status...', colors.blue);

  // Check if vercel CLI is installed
  try {
    execSync('which vercel', { stdio: 'ignore' });
  } catch (error) {
    log('⚠️  Vercel CLI not found!', colors.yellow);
    log('Install it with: npm i -g vercel', colors.yellow);
    return;
  }

  // Check if this is a Vercel project
  const hasVercelDir = fs.existsSync('.vercel');
  const hasVercelJson = fs.existsSync('vercel.json');
  
  if (!hasVercelDir && !hasVercelJson) {
    log('ℹ️  No Vercel deployment detected for this project', colors.yellow);
    log('💡 To deploy: run "vercel" in this directory', colors.blue);
    return;
  }

  try {
    // Get deployment list
    const output = execSync('vercel ls', { encoding: 'utf8', stdio: 'pipe' });
    const lines = output.split('\n').filter(line => line.trim());
    
    if (lines.length < 2) {
      log('❌ No deployments found', colors.red);
      return;
    }

    // Parse the deployment info (skip headers)
    const deploymentLine = lines[1];
    const parts = deploymentLine.split(/\s+/);
    
    if (parts.length < 2) {
      log('❌ Could not parse deployment info', colors.red);
      return;
    }

    const deploymentUrl = `https://${parts[1]}`;
    const deploymentAge = parts[parts.length - 1];
    
    log('\n✅ Deployment found!', colors.green);
    log(`🌐 URL: ${deploymentUrl}`, colors.bright);
    log(`⏰ Last updated: ${deploymentAge}`, colors.blue);

    // Copy to clipboard (macOS)
    if (process.platform === 'darwin') {
      try {
        execSync(`echo '${deploymentUrl}' | pbcopy`);
        log('📋 URL copied to clipboard!', colors.green);
      } catch (e) {
        // Clipboard copy failed, but that's okay
      }
    }

    // Optional: Get project info
    try {
      const projectInfo = execSync('vercel project ls', { encoding: 'utf8', stdio: 'pipe' });
      const projectLines = projectInfo.split('\n').filter(line => line.trim());
      if (projectLines.length > 1) {
        const projectName = projectLines[1].split(/\s+/)[0];
        log(`📦 Project: ${projectName}`, colors.blue);
      }
    } catch (e) {
      // Project info not available, skip
    }

    log('\n🎉 Check complete!', colors.green);

  } catch (error) {
    log('❌ Error fetching deployment info:', colors.red);
    if (error.message.includes('not authenticated')) {
      log('Please run: vercel login', colors.yellow);
    } else {
      log('Make sure you have access to this Vercel project', colors.yellow);
    }
  }
}

// Run the check
checkVercelDeployment().catch(console.error); 