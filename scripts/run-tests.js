import { spawnSync } from 'node:child_process'
import { resolve } from 'node:path'

const userArgs = process.argv.slice(2)
const transformedArgs = userArgs.filter((arg) => arg !== '--runInBand')

const vitestBin = resolve(
  process.cwd(),
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'vitest.cmd' : 'vitest',
)

const result = spawnSync(vitestBin, transformedArgs, { stdio: 'inherit' })

if (result.error) {
  console.error(result.error)
  process.exit(1)
}

process.exit(result.status ?? 1)
