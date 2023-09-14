import { logger } from '@4lch4/logger'

async function main() {
  try {
    logger.info(`[main]: Starting!`)
  } catch (error) {
    logger.error(`[main]: Error caught!`)
    logger.error(error)
  }
}

main()
  .then(res => {
    logger.info(JSON.stringify(res, null, 2))
    logger.success(`[main]: Execution completed successfully!`)
  })
  .catch(err => {
    logger.error(`[main]: Error caught!`)
    logger.error(err)
  })
