export function getCorrectPath(path: string) {
    // Remove any leading slash
    const cleanPath = path.replace(/^\/+/, '');
    
    // If we're in development
    if (process.env.NODE_ENV === 'development') {
      return `/${cleanPath}`;
    }
    
    // In production, ensure we use the correct base path
    return `/lesson-sets/${cleanPath}`;
  }
  
  export function getLessonPath(lessonId: string) {
    return getCorrectPath(`lessons/${lessonId}`);
  }
  
  export function getAssetPath(path: string) {
    return getCorrectPath(path);
  }