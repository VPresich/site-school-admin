import {defineType} from 'sanity'

export const banner = defineType({
  name: 'banner',
  title: 'Банери',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Текст',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'image',
      title: 'Зображення',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'link',
      title: 'Посилання (опціонально)',
      type: 'string',
    },
    {
      name: 'activeFrom',
      title: 'Показувати з',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'activeTo',
      title: 'Показувати до',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'priority',
      title: 'Пріоритет',
      type: 'number',
      initialValue: 1,
    },
    {
      name: 'isActive',
      title: 'Активний',
      type: 'boolean',
      initialValue: true,
    },
  ],
})
