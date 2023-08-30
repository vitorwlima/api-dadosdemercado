type APIArgs = {
  token: string
}

class APIDadosDeMercado {
  private readonly token: string

  constructor(data: APIArgs) {
    this.token = data.token
  }
}

export default APIDadosDeMercado
