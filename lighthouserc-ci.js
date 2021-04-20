module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run dev',
      numberOfRuns: 3,
      url: ['http://localhost:8080']
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.6 }],
        'categories:accessibility': ['error', { minScore: 0.6 }],
        'categories:best-practices': ['error', { minScore: 0.6 }],
        'categories:seo': ['error', { minScore: 0.6 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}
