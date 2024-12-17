export function getBasePath() {
    if (typeof window !== 'undefined') {
      // Check if we're on GitHub Pages
      const isGitHubPages = window.location.hostname.includes('github.io');
      return isGitHubPages ? '/lesson_sets' : '';
    }
    return process.env.GITHUB_ACTIONS ? '/lesson_sets' : '';
  }
  
  export function getAssetPath(path: string) {
    const basePath = getBasePath();
    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${normalizedPath}`;
  }