function Auth(authService){
  this.authService = authService

  this.signInWithFacebook = (phone, password) => {
    return this.authService(phone, password)
  }
}

test('Mock with 1 should return 1', () => {
  const mockFn = jest.fn(1)
    .mockReturnValue(1)

  expect(mockFn(1)).toBe(1)
  expect(mockFn).toBeCalledWith(1)
})

test('Sigin with valid credential should pass', () => {
  const returnObject = {
    name: 'Perapol',
    facebookID: '963852741',
    email: '58160527@go.buu.ac.th'
  }

  const mockFacebook = jest.fn('0817777777','asdf1234')
    .mockReturnValue(returnObject)

    let app = new Auth(mockFacebook)
    let value = app.signInWithFacebook('0817777777','asdf1234')

    expect(value).toEqual(returnObject)
    expect(mockFacebook).toBeCalled()
    expect(mockFacebook).toBeCalledWith('0817777777','asdf1234')
})
