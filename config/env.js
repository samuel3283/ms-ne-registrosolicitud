export const config = {
 appName: process.env.APP_NAME,
 env: process.env.APP_ENV,
 version: process.env.API_VERSION,
 featureSumEnabled:
   process.env.FEATURE_SUM_ENABLED === 'true'
}