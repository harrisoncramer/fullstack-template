const request = require('supertest');
const express = require('express');

const app = require('../app');

describe('Should test the dummy route', () => {
  it('Should recieve the response string', async () => {
    const response = await request(app).get('/api/v1');
    expect(response.body).toMatchObject({ hello: 'world' });
  });
});
