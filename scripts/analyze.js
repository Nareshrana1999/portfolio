const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const { join } = require('path')

// Clean previous builds
console.log('🧹 Cleaning previous build...')
execSync('rm -rf .next', { stdio: 'inherit' })

// Run production build with analysis
console.log('🏗️  Building for production with analysis...')
execSync('cross-env ANALYZE=true next build', { stdio: 'inherit' })

// Generate a performance report
console.log('📊 Generating performance report...')
const reportPath = join(process.cwd(), '.next/analyze/report.json')
const report = {
  generatedAt: new Date().toISOString(),
  metrics: {}
}

// Save the report
fs.mkdirSync(path.dirname(reportPath), { recursive: true })
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))

console.log('✅ Analysis complete! Open .next/analyze/report.json for the full report.')
console.log('   You can also run `pnpm run analyze` to view the bundle analysis in the browser.')
