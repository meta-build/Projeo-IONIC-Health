import { EditarUsuarioProps, UsuarioContext, UsuarioProps } from "../types";
import api from "./api";

interface Usuario {
  name: string;
  email: string;
  password: string;
  roleId: number;
}

interface Login {
  email: string;
  password: string;
}

class Usuarios {
  async criar(usuario: Usuario) {
    const { data } = await api.post('user', usuario);
    return data;
  }

  async editar(id: number, usuarioAtualizado: EditarUsuarioProps) {
    const { data } = await api.put(`user/${id}`, usuarioAtualizado);
    return data;
  }

  async deletar(id: number) {
    const { data } = await api.delete(`user/${id}`)
    return data;
  }

  async getByID(id: number): Promise<UsuarioProps> {
    const { data } = await api.get(`user/${id}`)
    return data;
  }

  async getAll(): Promise<UsuarioProps[]> {
    const { data } = await api.get('user')
    return data;
  }

  async login(login: Login):Promise<UsuarioContext> {
    const { data } = await api.post('login', login)
    return data;
  }
}

export default new Usuarios();