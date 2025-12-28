import {defineType, defineField} from 'sanity'
import {photoItem} from './photoItem'

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
      type: 'array',
      of: [{type: 'mediaItem'}],
    }),

    defineField({
      name: 'photos',
      title: 'Фотогалерея',
      type: 'array',
      of: [photoItem],
    }),
  ],
})
