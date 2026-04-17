import { describe, it, expect } from 'vitest'

// Простой тест логики авторизации
const mockLogin = (login, password) => {
  if (login === 'admin' && password === 'admin') {
    return { token: 'mock-jwt-token' }
  }
  return null
}

describe('Auth Mock Test', () => {
  it('should return token for admin/admin', () => {
    const response = mockLogin('admin', 'admin')
    expect(response?.token).toBe('mock-jwt-token')
  })

  it('should return null for wrong credentials', () => {
    const response = mockLogin('wrong', 'pass')
    expect(response).toBeNull()
  })
})
