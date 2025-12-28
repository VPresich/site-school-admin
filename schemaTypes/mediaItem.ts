import {defineType, defineField} from 'sanity'

export const mediaItem = defineType({
  name: 'mediaItem',
  title: 'Відео (YouTube)',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Назва відео',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'YouTube посилання',
      type: 'url',
      validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
    }),
  ],
})
