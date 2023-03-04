import app from './app';
import request from 'supertest';

describe('GET /user', () => {
	test('should respond with code status 200', async () => {
		const response = await request(app).get('/test').send();
		expect(response.status).toBe(200);
	});
});
