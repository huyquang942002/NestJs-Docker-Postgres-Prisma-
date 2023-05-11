import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as pactum from 'pactum';
import {
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef =
      await Test.createTestingModule({
        imports: [AppModule],
      }).compile();
    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    app.listen(3333);
    prisma = app.get(PrismaService);
    await prisma.cleanDb();
  });
  afterAll(() => {});
  describe('Auth', () => {
    describe('SignUp', () => {
      it.todo('Should signup');
    });

    describe('SignIn', () => {});
  });
  describe('User', () => {
    describe('Get me', () => {});

    describe('Edit User', () => {});
  });
  describe('BookMarks', () => {
    describe('Create BookMarks', () => {});

    describe('Get BookMarks', () => {});
    describe('Get BookMarks by id', () => {});

    describe('Edit BookMarks', () => {});

    describe('Delete BookMarks', () => {});
  });
});
