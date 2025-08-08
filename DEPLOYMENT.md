# GitHub Actions Deployment to Cloudflare Workers

This guide will help you set up automatic deployment of your Vite React app to Cloudflare Workers using GitHub Actions.

## Prerequisites

1. **Cloudflare Account** with Workers enabled
2. **GitHub Repository** with your code
3. **Cloudflare API Token** and **Account ID**

## Setup Steps

### 1. Get Cloudflare Credentials

#### Get your Account ID:
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. In the right sidebar, copy your **Account ID**

#### Create API Token:
1. Go to [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click **"Create Token"**
3. Use **"Custom token"** template
4. Set permissions:
   - **Account** - `Cloudflare Workers:Edit`
   - **Zone** - `Zone:Read` (if using custom domain)
   - **Account** - `Account:Read`
5. Add Account Resources: `Include - All accounts`
6. Add Zone Resources: `Include - All zones` (if using custom domain)
7. Click **"Continue to summary"** then **"Create Token"**
8. **Copy the token** (you won't see it again!)

### 2. Add Secrets to GitHub Repository

1. Go to your GitHub repository
2. Navigate to **Settings** > **Secrets and variables** > **Actions**
3. Click **"New repository secret"** and add:

   - **Name**: `CLOUDFLARE_API_TOKEN`
   - **Value**: Your API token from step 1

   - **Name**: `CLOUDFLARE_ACCOUNT_ID`
   - **Value**: Your Account ID from step 1

### 3. Deployment Workflow

The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml` and will:

- ✅ Trigger on pushes to `main` and `siteupdates` branches
- ✅ Install Node.js and dependencies
- ✅ Build your React app with Vite
- ✅ Deploy to Cloudflare Workers using Wrangler

### 4. Manual Deployment (Optional)

You can also deploy manually from your local machine:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to Cloudflare
npm run deploy
```

### 5. Custom Domain (Optional)

To add a custom domain:

1. Add your domain to Cloudflare
2. Update `wrangler.json`:
```json
{
  "routes": [
    {
      "pattern": "yourdomain.com/*",
      "custom_domain": true
    }
  ]
}
```

## Troubleshooting

### Common Issues:

1. **Build fails**: Check if all dependencies are in `package.json`
2. **Deploy fails**: Verify API token permissions and Account ID
3. **404 errors**: Ensure `wrangler.json` has correct asset directory

### Checking Deployment:

1. Go to [Cloudflare Workers Dashboard](https://dash.cloudflare.com/workers)
2. Find your worker named `vite-react-template`
3. Click to view logs and metrics

## Project Structure

Your project is configured as:
- **React App**: Built with Vite → `dist/client/`
- **Worker Script**: `src/worker/index.ts`
- **Static Assets**: Served from `dist/client/`
- **SPA Routing**: Enabled for React Router

## Next Steps

1. ✅ Add the GitHub secrets
2. ✅ Push code to `main` or `siteupdates` branch
3. ✅ Watch the GitHub Actions workflow run
4. ✅ Visit your Cloudflare Worker URL to see the deployed site

Your site will automatically redeploy whenever you push to the configured branches!
