import {prisma} from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '53713fc2-06bd-47b6-895d-454edbd654fc',
      title: 'Limpeza do depósito',
      slug: 'limpeza-do-deposito',
      details: 'Organização da limpeza do deposito da DGI',
      maximumAtendees: 120
    }
  })
}

  seed().then(() => {
    console.log('O banco de dados foi populado!')
    prisma.$disconnect()
  })