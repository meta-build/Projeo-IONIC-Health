interface SolicitacaoProps {
  id: number,
  title: string,
  type: string,
  description: string,
  status: 'RECENT' | 'RATING' | 'NEW' | 'ONHOLDING' | 'DONE',
  requesterId: number,
  createdAt: string,
  updatedAt: string,
  archivedAt: string,
  isArchived: boolean,
  ratings: RatingProps[],
  attachments: ArquivoProps[],
  assignedRoleId: number | null;
}

interface RatingProps {
  id: number,
  value: number,
  committee: string,
  comment: string,
  userId: number,
  ticketId: number
}

interface ArquivoProps {
  fileName: string;
  fileType: string;
  id: number;
  storageType: string;
  ticketId: number;
  url: string;
}

interface EditarSolicitacaoProps {
  title: string;
  description: string;
  status: 'RECENT' | 'RATING' | 'NEW' | 'ONHOLDING' | 'DONE',
  isArchived: boolean;
  assignedRoleId: number | null;
}

interface EditarUsuarioProps {
  name: string;
  email: string;
  isActive: boolean;
  roleId: number;
}

interface UsuarioProps {
  id: number,
  name: string,
  email: string,
  roleId: string,
  role: RoleProps,
  isActive: boolean
}

interface RoleProps {
  id: number,
  name: string,
  isAdmin: boolean,
  permissions: PermissionProps[]
}

interface PermissionProps {
  id: number,
  permissionName: string,
  humanizedPermissionName: string,
  entity: string,
  humanizedEntity: string
}

interface UsuarioContext {
  accessToken: string,
  name: string,
  role: RoleProps,
  id: number
}

interface CreateGrupoProps {
  name: string,
  isAdmin: boolean,
  permissions: number[]
}

interface GrupoProps {
  id: number,
  name: string,
  isAdmin: boolean,
  permissions: PermissionProps[]
}

export type {
  SolicitacaoProps,
  ArquivoProps,
  EditarSolicitacaoProps,
  RatingProps,
  UsuarioProps,
  EditarUsuarioProps,
  UsuarioContext,
  CreateGrupoProps,
  GrupoProps,
  PermissionProps
}