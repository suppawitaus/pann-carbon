# PANN CARBON - Deployment Guide

This guide covers deploying the PANN CARBON application to Google Cloud Platform.

## Prerequisites

- Google Cloud account with billing enabled (for Always Free tier)
- Google Cloud SDK (gcloud) installed and configured
- Docker installed (for local testing)
- Node.js 20+ installed locally

## Deployment Options

### Option 1: Google Cloud Run (Recommended)

Cloud Run is a serverless container platform that automatically scales and is ideal for static sites.

#### Step 1: Build and Test Docker Image Locally

```bash
# Build the Docker image
docker build -t pann-carbon:latest .

# Test locally (optional)
docker run -p 8080:80 pann-carbon:latest
# Visit http://localhost:8080
```

#### Step 2: Configure Google Cloud

```bash
# Set your project ID
export PROJECT_ID=your-project-id
gcloud config set project $PROJECT_ID

# Enable required APIs
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

#### Step 3: Build and Push to Google Container Registry

```bash
# Build and push the image
gcloud builds submit --tag gcr.io/$PROJECT_ID/pann-carbon:latest

# Or use Artifact Registry (recommended for new projects)
gcloud artifacts repositories create pann-carbon-repo \
    --repository-format=docker \
    --location=asia-southeast1

gcloud builds submit --tag asia-southeast1-docker.pkg.dev/$PROJECT_ID/pann-carbon-repo/pann-carbon:latest
```

#### Step 4: Deploy to Cloud Run

```bash
# Deploy with minimal configuration (Always Free tier compatible)
gcloud run deploy pann-carbon \
    --image gcr.io/$PROJECT_ID/pann-carbon:latest \
    --platform managed \
    --region asia-southeast1 \
    --allow-unauthenticated \
    --memory 512Mi \
    --cpu 1 \
    --max-instances 10 \
    --min-instances 0 \
    --port 80

# Or if using Artifact Registry:
gcloud run deploy pann-carbon \
    --image asia-southeast1-docker.pkg.dev/$PROJECT_ID/pann-carbon-repo/pann-carbon:latest \
    --platform managed \
    --region asia-southeast1 \
    --allow-unauthenticated \
    --memory 512Mi \
    --cpu 1 \
    --max-instances 10 \
    --min-instances 0 \
    --port 80
```

#### Step 5: Get Your URL

After deployment, Cloud Run will provide a URL like:
```
https://pann-carbon-xxxxx-xx.a.run.app
```

### Option 2: Google Cloud App Engine (Alternative)

App Engine is another serverless option, but requires an `app.yaml` configuration.

#### Step 1: Create app.yaml

```yaml
runtime: nodejs20

instance_class: F1

automatic_scaling:
  min_instances: 0
  max_instances: 10

handlers:
  - url: /
    static_files: dist/index.html
    upload: dist/index.html
  - url: /(.*)
    static_files: dist/\1
    upload: dist/(.*)
```

#### Step 2: Deploy

```bash
# Build first
npm run build

# Deploy
gcloud app deploy app.yaml --project=$PROJECT_ID
```

## Environment Variables

Currently, the application doesn't require environment variables. If you need to add them in the future:

### For Cloud Run:
```bash
gcloud run services update pann-carbon \
    --set-env-vars="VARIABLE_NAME=value" \
    --region=asia-southeast1
```

### For App Engine:
Add to `app.yaml`:
```yaml
env_variables:
  VARIABLE_NAME: "value"
```

## Build Scripts

The project includes standard npm scripts:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Cost Optimization (Always Free Tier)

### Cloud Run Free Tier Limits:
- 2 million requests per month
- 360,000 GB-seconds of memory
- 180,000 vCPU-seconds
- 1 GB egress per day

### App Engine Free Tier Limits:
- 28 instance hours per day
- 1 GB outgoing traffic per day

**Recommendation**: Use Cloud Run with `min-instances: 0` to stay within free tier limits.

## Continuous Deployment

### Using Cloud Build (CI/CD)

Create `cloudbuild.yaml`:

```yaml
steps:
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/pann-carbon:$SHORT_SHA', '.']
  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/pann-carbon:$SHORT_SHA']
  - name: 'gcr.io/cloud-builders/gcloud'
    args:
      - 'run'
      - 'deploy'
      - 'pann-carbon'
      - '--image'
      - 'gcr.io/$PROJECT_ID/pann-carbon:$SHORT_SHA'
      - '--region'
      - 'asia-southeast1'
      - '--platform'
      - 'managed'
      - '--allow-unauthenticated'
```

Trigger build:
```bash
gcloud builds submit --config cloudbuild.yaml
```

## Monitoring and Logs

### View Logs:
```bash
# Cloud Run logs
gcloud run services logs read pann-carbon --region=asia-southeast1

# App Engine logs
gcloud app logs tail
```

### Monitor in Console:
- Cloud Run: https://console.cloud.google.com/run
- App Engine: https://console.cloud.google.com/appengine

## Troubleshooting

### Common Issues:

1. **Build fails**: Check Node.js version (should be 20+)
2. **404 on routes**: Ensure nginx config handles SPA routing
3. **Out of memory**: Increase memory allocation (may incur costs)
4. **Slow cold starts**: Set `min-instances: 1` (may incur costs)

## Security Notes

- The application is currently static (no backend API)
- No sensitive data is stored
- All routes are public
- Consider adding Cloud CDN for better performance

## Next Steps

1. Set up custom domain (optional)
2. Configure Cloud CDN for caching
3. Set up monitoring alerts
4. Configure backup strategies if needed

