import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable
} from 'typeorm'
import { User } from './user'
import { Permission } from './permission'
import { Ticket } from './ticket'

@Entity({ name: 'role' })
export class Role {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, unique: true, length: 100 })
  name: string

  @OneToMany(() => User, (user) => user.role)
  users: User[]

  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'role_permission',
    joinColumn: {
      name: 'roleId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'permissionId',
      referencedColumnName: 'id'
    }
  })
  permissions: Permission[]

  @OneToMany(() => Ticket, (ticket) => ticket.assignedRole)
  tickets: Ticket[]
}
