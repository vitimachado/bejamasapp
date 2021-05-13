const withImages = require('next-images')
module.exports = withImages({
  esModule: true
})

module.exports = {
  images: {
    domains: ['images.pexels.com', 'www.pexels.com'],
  },
}
