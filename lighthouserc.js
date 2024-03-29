module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm start',
      numberOfRuns: 2,
      url: ['http://localhost:8080'],
      chromePath: '/usr/bin/google-chrome' // WSL
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}
