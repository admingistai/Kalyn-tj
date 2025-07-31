# Deploying the Floating Widget with Vite & Vercel

This guide explains how to deploy your floating widget so anyone can embed it with one line of code.

## 🚀 Quick Deployment Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Build the Widget

```bash
npm run build
```

This creates `dist/widget.js` - a minified, self-contained file.

### 3. Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to production
npm run deploy

# Or deploy a preview
npm run deploy:preview
```

#### Option B: Using GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect the configuration and deploy

### 4. Your Widget is Live! 🎉

Once deployed, your widget will be available at:
```
https://your-project-name.vercel.app/widget.js
```

Anyone can now embed it with:
```html
<script src="https://your-project-name.vercel.app/widget.js"></script>
```

## 📋 Configuration Details

### Vite Configuration (`vite.config.ts`)

- **Library Mode**: Builds as IIFE for immediate execution
- **Minification**: Uses Terser to reduce file size
- **Inlining**: All assets are inlined (no external dependencies)
- **Single File**: Everything compiles into one `widget.js`

### Vercel Configuration (`vercel.json`)

- **CORS Headers**: Allows embedding from any domain
- **Caching**: Immutable caching for performance
- **Security**: Proper content-type and security headers
- **Demo Page**: Root URL shows documentation

## 🔒 Security Considerations

1. **CORS**: The widget can be embedded on any domain
2. **HTTPS**: Vercel provides automatic SSL
3. **CSP**: Some sites may block external scripts - provide documentation
4. **SRI**: Consider adding Subresource Integrity for security:
   ```html
   <script 
     src="https://your-widget.vercel.app/widget.js"
     integrity="sha384-..." 
     crossorigin="anonymous">
   </script>
   ```

## 🚄 Performance Optimizations

1. **Edge Network**: Vercel serves from 100+ global locations
2. **Caching**: Immutable cache headers for optimal performance
3. **Compression**: Automatic Brotli/Gzip compression
4. **Size**: Widget is ~15-20KB minified

## 📦 Versioning Strategy

For production widgets, consider versioned URLs:

```bash
# Deploy to versioned path
/v1/widget.js
/v2/widget.js
```

Update `vercel.json` rewrites:
```json
{
  "rewrites": [
    { "source": "/v1/widget.js", "destination": "/widget.js" },
    { "source": "/latest/widget.js", "destination": "/widget.js" }
  ]
}
```

## 🧪 Testing Embedding

### Local Testing
```bash
# Start local dev server
npm run dev

# In another project, use local URL
<script src="http://localhost:3000/widget.js"></script>
```

### Cross-Origin Testing
Create a test HTML file and open via `file://` protocol:
```html
<!DOCTYPE html>
<html>
<body>
  <h1>Widget Test</h1>
  <script src="https://your-widget.vercel.app/widget.js"></script>
</body>
</html>
```

## 📊 Monitoring Usage

Consider adding basic analytics to track usage:

```javascript
// In widget initialization
if (window.location.hostname !== 'localhost') {
  console.log('Widget loaded on:', window.location.hostname);
  // Or send to analytics service
}
```

## 🔧 Troubleshooting

### Widget Not Loading
1. Check browser console for CORS errors
2. Verify script URL is correct
3. Check if site has Content Security Policy blocking scripts

### Style Conflicts
- Widget uses inline styles with high specificity
- All styles are scoped to widget elements
- Glass morphism requires `backdrop-filter` support

### Multiple Instances
- Widget prevents duplicate initialization
- Each page load creates one instance only

## 🚀 Advanced Deployment

### Custom Domain
```bash
# In Vercel dashboard
Settings > Domains > Add
widget.yourdomain.com
```

### Environment Variables
```javascript
// vercel.json
{
  "env": {
    "WIDGET_API_URL": "@widget-api-url"
  }
}
```

### Edge Functions
For dynamic configuration:
```javascript
// api/widget-config.js
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({
    theme: req.query.theme || 'light',
    position: req.query.position || 'bottom-center'
  });
}
```

## 📚 Integration Documentation

Provide clear documentation for your users:

### Basic Integration
```html
<!-- Add before closing </body> tag -->
<script src="https://widget.example.com/widget.js"></script>
```

### React Integration
```jsx
useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://widget.example.com/widget.js';
  script.async = true;
  document.body.appendChild(script);
  
  return () => {
    // Cleanup if needed
    if (window.FloatingWidget) {
      window.FloatingWidget.destroy();
    }
  };
}, []);
```

### WordPress Plugin
```php
function add_floating_widget() {
  wp_enqueue_script(
    'floating-widget',
    'https://widget.example.com/widget.js',
    array(),
    '1.0.0',
    true
  );
}
add_action('wp_enqueue_scripts', 'add_floating_widget');
```

## 🎯 Best Practices

1. **Version Your API**: Use `/v1/widget.js` for breaking changes
2. **Monitor Performance**: Use Vercel Analytics
3. **Test Regularly**: Automated tests for embedding
4. **Document Everything**: Clear integration guides
5. **Provide Support**: GitHub issues or support email
6. **Graceful Failures**: Widget should fail silently if needed
7. **Respect User Privacy**: No tracking without consent

## 🔄 Updating the Widget

1. Make changes to source code
2. Build: `npm run build`
3. Deploy: `npm run deploy`
4. Users automatically get updates (unless using versioned URLs)

---

Your widget is now ready for global distribution! 🌍