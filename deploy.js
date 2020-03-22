#!/usr/bin/env node

const { exec } = require('child_process')

const [ /* argv0 */, /* execPath */, app, ...args] = process.argv

if (!app) {
  process.stdout.write('Specify which app to deploy\r\nUsage: deploy.js [app]')
  process.exit(1)
}

switch(app) {
  case 'frontend':
    exec('git subtree push --prefix frontend frontend master', err => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      process.exit(0)
    })
    break
  
  case 'backend':
    exec('git subtree push --prefix backend backend master', err => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
      process.exit(0)
    })
    break
  
  default:
    console.error(`Unknown app ${app}`)
    process.exit(1)
}
