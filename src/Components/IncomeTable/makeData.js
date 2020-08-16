import faker from 'faker';
import moment from 'moment';

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

var format = new Intl.NumberFormat('en-IN', { 
    style: 'currency', 
    currency: 'INR', 
    minimumFractionDigits: 2, 
}); 

const newPerson = (index) => {
  const statusChance = Math.random()
  return {
    id: index+1,
    dot: moment(faker.date.past().toUTCString()).format('LL'),
    source: faker.name.firstName(),
    account: faker.finance.accountName(),
    amount: format.format(faker.finance.amount()),
    transaction_type: faker.finance.transactionType(),
    transaction_reason: 'lorem ipsum'
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map((d,index) => {
      return {
        ...newPerson(index),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
