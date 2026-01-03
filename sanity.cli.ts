import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '8kzvw4rj', // твой Project ID
    dataset: 'production', // рабочий датасет
  },
  deployment: {
    autoUpdates: true, // авто-обновления Studio
    appId: 'thuiyckp5gxone95ddtskzds', // добавлен appId, чтобы не спрашивало при деплое
  },
})
