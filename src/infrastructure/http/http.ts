const headers = {
    'Content-Type': 'application/json'
  }

  const urlBase = 'http://localhost:3001/';
  
  const get = async <T>(url: string) => {
    const urlFinal = urlBase + url;
    const response = await fetch(urlFinal, {
      method: 'GET',
      headers
    })
    return await response.json() as T
  }
  
  const post = async <T>(url: string, body: any) => {
    const urlFinal = urlBase + url;
    const response = await fetch(urlFinal, {
      method: 'POST',
      headers,
      body
    })
    return await response.json() as T
  }
  
  const put = async <T>(url: string, body: any) => {
    const urlFinal = urlBase + url;
    const response = await fetch(urlFinal, {
      method: 'PUT',
      headers,
      body
    })
    return await response.json() as T
  }
  
  const _delete = async <T>(url: string) => {
    const urlFinal = urlBase + url;
    const response = await fetch(urlFinal, {
      method: 'DELETE',
      headers
    })
    return await response.json() as T
  }
  
  export const http = {
    get,
    post,
    put,
    delete: _delete
  }
  