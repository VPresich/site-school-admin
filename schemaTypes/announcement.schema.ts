import {defineType, defineField} from 'sanity'

export const announcement = defineType({
  name: 'announcement',
  title: 'Анонс',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Назва',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Дата публікації',
      type: 'date',
      options: {dateFormat: 'DD.MM.YYYY'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'enddate',
      title: 'Кінцева дата',
      type: 'date',
      options: {dateFormat: 'DD.MM.YYYY'},
      validation: (Rule) => Rule,
    }),
    defineField({
      name: 'description',
      title: 'Опис',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Категорія',
      type: 'string',
      options: {
        list: [
          {title: 'Концерт', value: 'concert'},
          {title: 'Виставка', value: 'exhibition'},
          {title: 'Майстер-клас', value: 'workshop'},
          {title: 'Відкритий урок', value: 'lesson'},
          {title: 'Екзамен', value: 'exam'},
          {title: 'Фестиваль', value: 'festival'},
          {title: 'Прийом', value: 'admissions'},
          {title: 'Оголошення', value: 'announcement'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Фотографії',
      type: 'array',
      of: [defineField({name: 'image', type: 'image', options: {hotspot: true}})],
    }),
    defineField({
      name: 'videos',
      title: 'Відео (YouTube)',
      type: 'array',
      of: [defineField({name: 'video', type: 'url'})],
    }),
  ],
})
