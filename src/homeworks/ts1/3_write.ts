/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

type TCategory = {
  id: string;
  name: string;
  photo?: string;
};

type TProduct = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: TCategory;
};

type TCost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: TCategory;
  type: 'Cost';
};

type TProfit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: TCategory;
  type: 'Profit';
};

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

const getRandomNumberInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomName = (): string => {
  // eslint-disable-next-line prettier/prettier
  const names = [
    'Audi',
    'Wolkswagen',
    'ВАЗ',
    'ГАЗ',
    'ТАЗ',
    'Кофемолка',
    'Эспандер'
  ];

  return names[getRandomNumberInRange(0, names.length - 1)];
};

export const createRandomProduct = (createdAt: string): TProduct => {
  const product: TProduct = {
    id: getRandomNumberInRange(1, 100).toString(),
    name: getRandomName(),
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpzn2GyJaYRjG_CoiZdQM2cmlKvMvk00vJQ&s',
    createdAt: createdAt,
    price: getRandomNumberInRange(5001, 10000),
    category: {
      id: '78',
      name: 'Other',
    },
  };

  if (getRandomNumberInRange(0, 10) > 5) {
    product.desc = 'Какой замечательный продукт ' + product.name + ' всего за символические ' + product.price + ' у.е.';
  }

  if (getRandomNumberInRange(0, 10) > 5) {
    product.oldPrice = getRandomNumberInRange(0, 5000);
  }

  return product;
};
// По аналогии с getRandomName делаем для photo, category.Вариации разные. Отдельно массивы, а функция одна т.к. выборка из массива или отдельные функции для каждого поля.

type TOperation = TCost | TProfit;

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): TOperation => {
  const id = getRandomNumberInRange(0, 100);
  const isCost = getRandomNumberInRange(0, 10) > 5;

  return {
    id: id.toString(),
    name: 'Операция номер: ' + id,
    desc: isCost ? 'Потрачено на' : 'Доход с',
    createdAt: createdAt,
    amount: getRandomNumberInRange(1, 10000),
    category: {
      id: isCost ? '78' : '80',
      name: isCost ? 'Потрачено' : 'Доход',
    },
    type: isCost ? 'Cost' : 'Profit',
  };
};
