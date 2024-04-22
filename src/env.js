console.log('process.env.TEST_BASE_URL', process.env.TEST_BASE_URL)
console.log('process.env.TEST_BASE_OTHER', process.env.TEST_BASE_OTHER)

if (process.env.CI) {
  console.log('Запущено в github', process.env.CI)
}
