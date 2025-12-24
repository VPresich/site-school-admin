import {defineField} from 'sanity'

export const mediaItem = defineField({
  name: 'mediaItem',
  title: 'Відео (YouTube)',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Назва відео',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'YouTube посилання',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
  ],
})
