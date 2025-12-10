import {defineType, defineField} from 'sanity'

export const homepage = defineType({
  name: 'home',
  title: 'Головна сторінка',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      description: 'Короткий заголовок для головної сторінки',
    }),

    defineField({
      name: 'welcomeText',
      title: 'Привітання',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Основний текст привітання на головній сторінці',
    }),

    defineField({
      name: 'shortDescription',
      title: 'Короткий опис школи',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Коротка інформація про школу',
    }),

    defineField({
      name: 'departments',
      title: 'Відділення',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'departmentItem',
          title: 'Відділення',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Назва відділення',
            }),
            defineField({
              name: 'description',
              type: 'array',
              of: [{type: 'block'}],
              title: 'Опис',
            }),
            defineField({
              name: 'image',
              type: 'image',
              title: 'Зображення',
            }),
            defineField({
              name: 'slug',
              type: 'slug',
              title: 'Слаг для посилання',
              options: {source: 'name', maxLength: 96},
            }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'image',
            },
          },
        }),
      ],
    }),

    defineField({
      name: 'ctaSection',
      title: 'CTA-блок',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Заголовок',
          type: 'string',
          description: 'Великий заголовок у CTA-блоці',
        }),
        defineField({
          name: 'subheading',
          title: 'Підзаголовок',
          type: 'text',
          description: 'Короткий текст під заголовком',
        }),
        defineField({
          name: 'buttons',
          title: 'Кнопки',
          type: 'array',
          of: [
            defineField({
              type: 'object',
              name: 'button',
              fields: [
                defineField({name: 'label', type: 'string', title: 'Текст кнопки'}),
                defineField({
                  name: 'slug',
                  type: 'slug',
                  title: 'Слаг посилання',
                  options: {source: 'label', maxLength: 96},
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
