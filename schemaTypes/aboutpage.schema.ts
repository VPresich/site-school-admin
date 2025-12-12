import {defineType, defineField} from 'sanity'

export const aboutpage = defineType({
  name: 'about',
  title: 'Про школу',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок сторінки',
      type: 'string',
      description: 'Наприклад: Про школу',
    }),

    defineField({
      name: 'schoolInfo',
      title: 'Інформація про школу',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Основна текстова інформація про школу',
    }),

    defineField({
      name: 'director',
      title: 'Директор',
      type: 'object',
      fields: [
        defineField({
          name: 'info',
          title: 'Інформація про директора',
          type: 'array',
          of: [{type: 'block'}],
        }),
        defineField({
          name: 'photo',
          title: 'Фото директора',
          type: 'image',
          options: {hotspot: true},
        }),
      ],
    }),

    defineField({
      name: 'teachersSection',
      title: 'Викладачі',
      type: 'object',
      fields: [
        defineField({
          name: 'statsText',
          title: 'Статистика / загальна інформація',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Текстова інформація про викладачів, кількість, досвід тощо',
        }),
        defineField({
          name: 'teachers',
          title: 'Масив викладачів',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              name: 'teacher',
              title: 'Викладач',
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
            }),
          ],
        }),
        defineField({
          name: 'teachersGallery',
          title: 'Галерея викладачів',
          type: 'array',
          of: [
            defineField({name: 'photo', title: 'Фото', type: 'image', options: {hotspot: true}}),
          ],
        }),
      ],
    }),

    defineField({
      name: 'goals',
      title: 'Мета закладу',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'tasks',
      title: 'Основні задачі',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'development',
      title: 'Розвиток та інновації',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Інформація про розвиток та інноваційні підходи',
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
