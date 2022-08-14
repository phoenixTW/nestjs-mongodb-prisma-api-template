import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDTO, UpdateUserDTO } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDTO: CreateUserDTO) {
    return await this.prisma.user.create({
      data: createUserDTO,
    });
  }

  async update(id: string, updateUserDTO: UpdateUserDTO) {
    return await this.prisma.user.update({
      where: { id },
      data: updateUserDTO,
    });
  }

  async delete(id: string) {
    return await this.prisma.user.delete({ where: { id } });
  }

  async getUsers() {
    return await this.prisma.user.findMany();
  }

  async getUser(id: string) {
    return await this.prisma.user.findFirst({ where: { id } });
  }
}
