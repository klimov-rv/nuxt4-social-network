export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body.login === 'admin' && body.password === 'admin') {
    return {
      id: 1,
      email: 'admin@example.com',
      name: 'Администратор',
      token: 'mock-jwt-token',
    };
  }

  throw createError({
    statusCode: 401,
    statusMessage: 'Неверный логин или пароль',
  });
});
