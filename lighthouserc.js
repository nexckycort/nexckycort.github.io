module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run dev',
      numberOfRuns: 1,
      url: ['http://localhost:8080']
      // chromePath: '/usr/bin/google-chrome' // WSL
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}
