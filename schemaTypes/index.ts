// schemas/index.ts
import {archive} from './archive.schema'
import {banner} from './banner.schema'
import {department} from './department.schema'
import {homepage} from './homepage.schema'
import {aboutpage} from './aboutpage.schema'
import {mediapage} from './mediapage.schema'
import {mediaItem} from './mediaItem'

export const schemaTypes = [archive, banner, department, homepage, aboutpage, mediapage, mediaItem]
