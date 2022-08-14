import { Response } from 'express';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

import { CreateUserDTO, UpdateUserDTO } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: CreateUserDTO) {
    const user = await this.userService.create(dto);
    return res.status(HttpStatus.OK).json(user);
  }

  @Patch('/:id')
  async update(
    @Res() res: Response,
    @Body() dto: UpdateUserDTO,
    @Param('id') id: string,
  ) {
    const user = await this.userService.update(id, dto);
    return res.status(HttpStatus.OK).json(user);
  }

  @Delete('/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const user = await this.userService.delete(id);
    return res.status(HttpStatus.OK).json(user);
  }

  @Get()
  async getUsers(@Res() res: Response) {
    const users = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json(users);
  }

  @Get('/:id')
  async getUser(@Res() res: Response, @Param('id') id: string) {
    const users = await this.userService.getUser(id);
    return res.status(HttpStatus.OK).json(users);
  }
}
