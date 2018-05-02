import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppController } from './app.controller';

describe('AppContoller', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [AppController],
        }).compile();
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            const appContoller = app.get<AppController>(AppController);
            expect(appContoller.root()).toBe('Hello World!');
        });
    });
});