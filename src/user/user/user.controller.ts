import { Controller, Get, Post, Query, Req } from '@nestjs/common';

@Controller('/api/users')
export class UserController {
  @Post('/insert')
  createUser(): string {
    return 'User created';
  }

  @Get()
  getUsers(): string {
    return 'All users';
  }

  @Get('/username')
  getUserById(@Query('name') name: string): string {
    return `User with name ${name}`;
  }
}
