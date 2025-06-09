

module.exports = {
  default: `src/features --require src/step-definition/**/*.js --require src/support/**/*.js`,

timeout: 20000,
    format: ['html:report.html'],
    publishQuiet: true
  }
