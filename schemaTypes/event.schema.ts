import {defineType, defineField} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Подія',
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
      title: 'Дата проведення',
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
      title: 'Тип заходу',
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
          {title: 'Прослухування', value: 'audition'},
          {title: 'Творча зустріч', value: 'meeting'},
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
