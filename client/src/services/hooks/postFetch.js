// post
// url: string
// body: json
// return: json
export const postFetch = async (url, body) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  return data
}
