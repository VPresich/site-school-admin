// schemas/index.ts
import {archive} from './archive.schema'
import {announcement} from './announcement.schema'
import {event} from './event.schema'
import {department} from './department.schema'
import {homepage} from './homepage.schema'

export const schemaTypes = [archive, announcement, event, department, homepage]
