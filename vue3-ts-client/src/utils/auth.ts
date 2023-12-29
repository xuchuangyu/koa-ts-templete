
import { uuid } from '@/utils/index'
export function setUuid() {
  if (localStorage.getItem('uuid')) {
    return localStorage.getItem('uuid');
  } else {
    let str = uuid()
    localStorage.setItem('uuid', str)
    return str
  }
}