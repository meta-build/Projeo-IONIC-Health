import { Role } from '@/infra/repositories/mysql/entities'

export interface CreateRole {
  create: (input: CreateRole.Input) => Promise<CreateRole.Output>
}

export namespace CreateRole {
  export type Input = {
    name: string
    permissions?: Array<{
      id: number
      permissionName: string
      humanizedPermissionName: string
      entity: string
      humanizedEntity: string
    }>
  }
  export type Output = {
    id: number
    name: string
    permissions: Array<{
      id: number
      permissionName: string
      humanizedPermissionName: string
      entity: string
      humanizedEntity: string
    }>
  }
}

export interface UpdateRole {
  update: (input: UpdateRole.Input) => Promise<UpdateRole.Output>
}

export namespace UpdateRole {
  export type Input = {
    id: number
    name: string
    permissions?: Array<{
      id: number
      permissionName: string
      humanizedPermissionName: string
      entity: string
      humanizedEntity: string
      roles: Role[]
    }>
  }
  export type Output = {
    id: number
    name: string
    permissions: Array<{
      id: number
      permissionName: string
      humanizedPermissionName: string
      entity: string
      humanizedEntity: string
    }>
  }
}

export interface LoadRoleById {
  loadById: (input: LoadRoleById.Input) => Promise<LoadRoleById.Output>
}

export namespace LoadRoleById {
  export type Input = {
    id: number
  }
  export type Output = {
    id: number
    name: string
    permissions: Array<{
      id: number
      permissionName: string
      humanizedPermissionName: string
      entity: string
      humanizedEntity: string
    }>
  }
}

export interface LoadAllRole {
  loadAll: () => Promise<LoadAllRole.Output>
}

export namespace LoadAllRole {
  export type Output = Array<{
    id: number
    name: string
    permissions: Array<{
      id: number
      permissionName: string
      humanizedPermissionName: string
      entity: string
      humanizedEntity: string
    }>
  }>
}
