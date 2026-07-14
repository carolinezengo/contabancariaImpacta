
  
export default class ApiServices {
  private apiUrl: string;


  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  // GET Request
  public async get<T>(endpoint: string, ): Promise<T> {
    const response = await fetch(`${this.apiUrl}${endpoint}`, {
      method: 'GET',
      headers:  {
      'Content-Type': 'application/json',
    }
     
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição GET: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // POST Request
  public async post<T, U>(endpoint: string, data: U): Promise<T> {
    const response = await fetch(`${this.apiUrl}${endpoint}`, {
      method: 'POST',
      headers:  {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify(data),
     
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição POST: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // PUT Request
  public async put<T, U>(endpoint: string, data: U): Promise<T> {
    const response = await fetch(`${this.apiUrl}${endpoint}`, {
      method: 'PUT',
      headers:  {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify(data),

    });

    if (!response.ok) {
      throw new Error(`Erro na requisição PUT: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

}