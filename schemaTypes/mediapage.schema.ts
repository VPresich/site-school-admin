import {defineType, defineField} from 'sanity'
import {photoItem} from './photoItem'
import {mediaItem} from './mediaItem'

export const mediapage = defineType({
  name: 'media',
  title: 'Медіатека',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок сторінки',
      type: 'string',
      initialValue: 'Медіатека',
    }),

    defineField({
      name: 'videos',
      title: 'Відео',
      type: 'array',
      of: [mediaItem],
    }),

    defineField({
      name: 'photos',
      title: 'Фотогалерея',
      type: 'array',
      of: [photoItem],
    }),
  ],
})
