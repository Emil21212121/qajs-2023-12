console.log('TEST_GITHUB_ENV', process.env.TEST_GITHUB_ENV)

if (process.env.CI) {
  console.log('Запущено в github', process.env.CI)
}
