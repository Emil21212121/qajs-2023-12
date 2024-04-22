import 'dotenv/config'

console.log('TEST_GITHUB_ENV', process.env.TEST_GITHUB_ENV)
console.log('TEST_OTHER', process.env.TEST_OTHER)
console.log('TEST_PASSWORD', process.env.TEST_PASSWORD)

if (process.env.CI) {
  console.log('Запущено в github', process.env.CI)
}
