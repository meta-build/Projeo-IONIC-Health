import { HttpResponse, badRequest, forbidden, ok } from '@/application/helpers'
import { Controller } from '@/application/controllers'
import { Validation } from '@/application/validation'
import { TicketRepository } from '@/infra/repositories/mysql/ticket-repository'
import { User } from '@/infra/repositories/mysql/entities'
import { UnauthorizedError } from '@/application/errors'

type HttpRequest = {
  params: { id: number }
  requester: User
  title?: string
  description?: string
  status?: string
  isArchived?: boolean
  assignedRoleId?: number
}

export class UpdateTicketController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly ticketRepository: TicketRepository
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest)

    if (error) {
      return badRequest(error)
    }

    if (httpRequest.status?.toUpperCase() === 'NEW') {
      const hasPermission = this.checkPermission(
        httpRequest.requester,
        'ApproveTicketToProd'
      )

      if (!hasPermission) {
        return forbidden(new UnauthorizedError())
      }
    }

    if (httpRequest.status?.toUpperCase() === 'RATING') {
      console.log(httpRequest.requester)
      const hasPermission = this.checkPermission(
        httpRequest.requester,
        'ApproveTicketToRating'
      )

      if (!hasPermission) {
        return forbidden(new UnauthorizedError())
      }
    }

    let archivedAt: Date

    if (httpRequest.isArchived === true) {
      archivedAt = new Date()
    } else if (httpRequest.isArchived === false) {
      archivedAt = null
    }

    const updatedTicket = await this.ticketRepository.update({
      id: httpRequest.params.id,
      title: httpRequest.title,
      description: httpRequest.description,
      status: httpRequest.status,
      isArchived: httpRequest.isArchived,
      assignedRoleId: httpRequest.assignedRoleId,
      archivedAt: archivedAt
    })

    return ok(updatedTicket)
  }

  private checkPermission = (user: User, permissionName: string): boolean => {
    return Boolean(user.role.permissions.find(
      (permission) => permission.permissionName === permissionName
    ))
  }
}
