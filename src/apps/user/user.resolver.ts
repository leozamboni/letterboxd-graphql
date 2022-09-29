import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => User)
  getUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Query((returns) => [User])
  user(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation((returns) => User)
  createUser(@Args('createUserInput') user: CreateUserDto): Promise<User> {
    return this.userService.createUser(user);
  }
}
