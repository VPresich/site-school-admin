import {defineField} from 'sanity'
import {photoItem} from './photoItem'

export const section = defineField({
  name: 'section',
  title: 'Розділ сторінки',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Назва розділу',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Контент',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Галерея',
      type: 'array',
      of: [photoItem],
    }),
  ],
})
