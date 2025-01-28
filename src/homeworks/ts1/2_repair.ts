/**
 * Здесь код с ошибками типов. Нужно их устранить
 * */

export const getFakeApi = async (): Promise<void> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.json());
  console.log(result);
};

export class SomeClass {
  set: object;
  channel: object;

  constructor() {
    this.set = new Set([1]);
    this.channel = new BroadcastChannel('test-broadcast-channel');
  }
}

export type Money = {
  currency: string;
  amount: number;
};

export type Percent = {
  percent: number;
};

export type DataValue = Money | Percent;

export type Data = {
  type: 'Money' | 'Percent';
  value: DataValue;
};

const getDataAmount = (data: Data): number => {
  switch (data.type) {
    case 'Money':
      return (data.value as Money).amount;
    case 'Percent':
      return (data.value as Percent).percent;
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const unhandled: never = data.type; // все же эту строчку не совсем понимаю. Зачем эта константа нужна? Она разве станет видима вне пределах функции getDataAmount ?
      throw new Error(`unknown type: ${data.type}`);
    }
  }
};
