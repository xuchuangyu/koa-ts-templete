export interface plantItem {
  cover: string,
  name: string,
  size: string,
  type: string,
  num: number,
  desc: string,
}

export interface listItem {
  label?: string
  pic: string,
  price: number,
  num: number,
  appropriate: string,
  appropriateUnit: string,
  plant: plantItem[],
  goods?: plantItem[],
  big?: plantItem[],
  medium?: plantItem[],
  small?: plantItem[],
  total?: number,
  goodsTotal?: number,
  bigTotal?: number,
  smallTotal?: number,
  mediumTotal?: number,
}