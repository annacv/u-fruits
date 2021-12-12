export const getFruitObject = (nestedObject, fruitsArr) => {
  for (let item in nestedObject) {
    item = nestedObject[item]
    if (typeof item === 'object' && item !== null) {
      if (Object.keys(item).length > 1 && item.isFruit) {
        fruitsArr.push(parseFruit(item))
      }
      getFruitObject(item, fruitsArr)
    }
  }
}

export const parseFruit = (jsonData) => {
  let parsedObject = JSON.parse(JSON.stringify(jsonData))
  return parsedObject
}

export const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

export const randomFruit = (limit, excludedIds) => {
  const excluded = [...excludedIds]
  let randomId = Math.floor(Math.random() * (limit - 7 + 1) + 7)
  if (excluded.includes(randomId)) {
    randomId = Math.floor(Math.random() * (limit - 7 + 1) + 7)
  } else {
    excludedIds.push(randomId)
  }
  excludedIds.push(randomId)
  return randomId
}

export const localFruits = [
  {
    id: 7,
    isFruit: true,
    name: 'melon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Cantaloupe_Melon_cross_section.png',
    price: '100',
    color: '#8bcc00',
    description: 'A melon is any of various plants of the family Cucurbitaceae with sweet, edible, and fleshy fruit.',
    taste: 'sweet',
    expires: randomDate(new Date(2021, 6, 13), new Date()),
  },
  {
    id: 8,
    isFruit: true,
    name: 'mango',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg',
    price: '90',
    color: '#FF8243',
    description: 'A mango is an edible stone fruit produced by the tropical tree Mangifera indica which is believed to have originated from the region between northwestern Myanmar, Bangladesh, and northeastern India.',
    taste: 'sweet',
    expires: randomDate(new Date(2021, 6, 12), new Date()),
  },
  {
    id: 9,
    isFruit: true,
    name: 'watermelon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Watermelon_cross_BNC.jpg',
    price: '90',
    color: '#FF0038',
    description: 'Watermelon (Citrullus lanatus) is a flowering plant species of the Cucurbitaceae family. A scrambling and trailing vine-like plant, it was originally domesticated in Africa.',
    taste: 'sweet',
    expires: randomDate(new Date(2021, 7, 23), new Date()),
  },
  {
    id: 10,
    isFruit: true,
    name: 'cherry',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Italienische_S%C3%BC%C3%9Fkirschen.JPG',
    price: '120',
    color: '#DE3163',
    description: 'Prunus avium, commonly called wild cherry, sweet cherry, gean, or bird cherry is a species of cherry, a flowering plant in the rose family, Rosaceae.',
    taste: 'sweet',
    expires: randomDate(new Date(), new Date()),
  },
  {
    id: 11,
    isFruit: true,
    name: 'peach',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peaches.jpg',
    price: '90',
    color: '#FFCBA4',
    description: 'The peach (Prunus persica) is a deciduous tree native to the region of Northwest China between the Tarim Basin and the north slopes of the Kunlun Mountains, where it was first domesticated and cultivated.',
    taste: 'sweet',
    expires: randomDate(new Date(), new Date()),
  },
  {
    id: 12,
    isFruit: true,
    name: 'strawberry',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg',
    price: '110',
    color: '#F80000',
    description: 'The garden strawberry (Fragaria × ananassa) is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness.',
    taste: 'sweet',
    expires: randomDate(new Date(2021, 7, 13), new Date()),
  },
  {
    id: 13,
    isFruit: true,
    name: 'pomegranate',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Pomegranate_%28opened%29.jpg',
    price: '90',
    color: '#AA1C47',
    description: 'The pomegranate (Punica granatum) is a fruit-bearing deciduous shrub in the family Lythraceae, subfamily Punicoideae, that grows between 5 and 10 m (16 and 33 ft) tall.',
    taste: 'sweet',
    expires: randomDate(new Date(), new Date()),
  },
  {
    id: 14,
    isFruit: true,
    name: 'tangerine',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/TangerineFruit.jpg',
    price: '60',
    color: '#F28500',
    description: 'The tangerine (Citrus reticulata L. var.,[1] sometimes referred as Citrus x tangerina[2]) is a group of orange-coloured citrus fruit consisting of hybrids of mandarin orange (Citrus reticulata) with some pomelo contribution.',
    taste: 'sweet',
    expires: randomDate(new Date(), new Date()),
  },
  {
    id: 15,
    isFruit: true,
    name: 'pear',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Pear_DS.jpg',
    price: '70',
    color: '#D1E231',
    description: 'The pear tree and shrub are a species of genus Pyrus /ˈpaɪrəs/, in the family Rosaceae, bearing the pomaceous fruit of the same name.',
    taste: 'sweet',
    expires: randomDate(new Date(), new Date()),
  },
  {
    id: 16,
    isFruit: true,
    name: 'fig',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Fig_%28Ficus_carica%29_fruits.jpg',
    price: '90',
    color: '#D1E231',
    description: 'Ficus carica is an Asian species of flowering plant in the mulberry family, known as the common fig. The fruit, also called the fig, is an important crop in those areas where it is grown commercially.',
    taste: 'sweet',
    expires: randomDate(new Date(2021, 7, 12), new Date()),
  }
]