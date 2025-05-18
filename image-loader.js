export default function imageLoader({ src }) {
  if (src.startsWith('http')) {
    return src
  }
  
  const basePath = '/cargo'
  const path = src.startsWith('/') ? src : `/${src}`
  return `${basePath}${path}`
}
