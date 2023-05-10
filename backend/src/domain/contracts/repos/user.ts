import { Role } from '@/infra/repositories/mysql/entities'

export interface CreateUser {
  create: (input: CreateUser.Input) => Promise<CreateUser.Output>
}

export namespace CreateUser {
  export type Input = {
    name: string
    email: string
    password: string
    roleId: number
  }
  export type Output = {
    id: number
    name: string
    email: string
    password: string
    roleId: number
  }
}

export interface LoadUserByEmail {
  loadByEmail: (input: LoadUserByEmail.Input) => Promise<LoadUserByEmail.Output>
}

export namespace LoadUserByEmail {
  export type Input = {
    email: string
  }
  export type Output = {
    id: number
    name: string
    email: string
    password: string
    roleId: number
  }
}

export interface LoadUserById {
  loadById: (input: LoadUserById.Input) => Promise<LoadUserById.Output>
}

export namespace LoadUserById {
  export type Input = {
    id: number
  }
  export type Output = {
    id: number
    name: string
    email: string
    password: string
    roleId: number
    role: Role
  }
}
