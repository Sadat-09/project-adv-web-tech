import { Test, TestingModule } from '@nestjs/testing';
import { AllUsersService } from './all-user.service';

describe('AllUserService', () => {
  let service: AllUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllUsersService],
    }).compile();

    service = module.get<AllUsersService>(AllUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
