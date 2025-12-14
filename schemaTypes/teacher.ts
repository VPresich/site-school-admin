import {defineField} from 'sanity'

export const teacher = defineField({
  name: 'teacher',
  title: 'Викладач',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Ім’я', type: 'string'}),
    defineField({name: 'position', title: 'Посада', type: 'string'}),
    defineField({
      name: 'bio',
      title: 'Коротка біографія',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'photo',
      title: 'Фото',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
  preview: {
    select: {title: 'name', media: 'photo'},
  },
})
