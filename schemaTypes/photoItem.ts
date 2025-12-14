// types/photoItem.ts
import {defineField} from 'sanity'

export const photoItem = defineField({
  name: 'photoItem',
  title: 'Фото з підписом',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Зображення',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'title',
      title: 'Підпис до фото',
      type: 'string',
    }),
  ],
})
