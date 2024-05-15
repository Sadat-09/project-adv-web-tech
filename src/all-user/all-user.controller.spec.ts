import { Test, TestingModule } from '@nestjs/testing';
import { AllUsersController } from './all-user.controller';
import { AllUsersService } from './all-user.service';

describe('AllUserController', () => {
  let controller: AllUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllUsersController],
      providers: [AllUsersService],
    }).compile();

    controller = module.get<AllUsersController>(AllUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
