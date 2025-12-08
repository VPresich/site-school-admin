import {defineType, defineField} from 'sanity'

export const department = defineType({
  name: 'department',
  title: 'Відділ школи',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Назва відділу',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'resume',
      title: 'Резюме',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'teachersText',
      title: 'Викладачі (текст)',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'teachersGallery',
      title: 'Фото викладачів',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'teachersList',
      title: 'Список викладачів',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'studentsText',
      title: 'Учні (текст)',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'studentsGallery',
      title: 'Галерея учнів',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
  ],
})
