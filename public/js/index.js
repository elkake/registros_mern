const getSubmit = document.querySelector('.getSubmit')
const getArea = document.querySelector('.getArea')
const getId = document.querySelector('.getId')

// * DELETE data
const deleteButton = document.querySelector('.deleteButton')

deleteButton.addEventListener('click', async (e) => {
  e.preventDefault()
  if (!getId.value || getId.value === '0') {
    return alert('Ingrese un id valido para eliminar cliente')
  }
  try {
    const response = await fetch(
      `http://localhost:3000/clientes/${getId.value}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    if (response.status === 200) {
      alert('Cliente eliminado correctamente')
    }
  } catch (error) {
    console.log('El cliente no existe', error)
  }
})
// * GET data

const getData = async () => {
  let response
  if (!getId.value || getId.value === '0') {
    response = await fetch('http://localhost:3000/clientes/')
  } else {
    response = await fetch(`http://localhost:3000/clientes/${getId.value}`)
  }
  const data = await response.json()

  return data
}

getSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  getArea.innerHTML = ''
  getData().then((data) => {
    const result = data.result.map((e) => {
      delete e.password
      return e
    })
    getArea.innerHTML = JSON.stringify(result)
  })
})

// * POST data

const postSubmit = document.querySelector('.postSubmit')
const postForm = document.querySelector('.postForm')

const postData = async (data) => {
  try {
    const response = await fetch('http://localhost:3000/clientes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: data[0].value,
        apellido: data[1].value,
        edad: data[2].value,
        email: data[3].value,
        contrasena: data[4].value
      })
    })

    return response
  } catch (error) {
    console.log(error)
  }
}

/*
  * PUT data
*/
const postCheckbox = document.querySelector('.postCheckbox')
const postNumber = document.querySelector('.postNumber')
const putGet = document.querySelector('.putGet')

putGet.addEventListener('click', async (e) => {
  if (!postNumber.value || postNumber.value === '0') {
    return alert('Ingrese un id valido para editar cliente')
  }
  try {
    const response = await fetch(
      `http://localhost:3000/clientes/${postNumber.value}`
    )
    const clienteData = await response.json()
    const cliente = clienteData.result[0]
    const form = Array.apply(null, postForm).slice(0, 6)
    form[0].value = cliente.name
    form[1].value = cliente.lastName
    form[2].value = cliente.age
    form[3].value = cliente.email
  } catch (error) {
    console.log('El cliente no existe', error)
  }
})

const putData = async (data, id) => {
  try {
    const response = await fetch(`http://localhost:3000/clientes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: data[0].value,
        apellido: data[1].value,
        edad: data[2].value,
        email: data[3].value,
        contrasena: data[4].value
      })
    })
    return response
  } catch (error) {
    console.log(error)
  }
}

// * post and put method
postSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  const data = Array.apply(null, postForm).slice(0, 6)
  if (data[4].value !== data[5].value) alert('Las contraseñas no coinciden')

  if (postCheckbox.checked) {
    if (!postNumber.value || postNumber.value === '0') {
      return alert('Ingrese un id valido para editar cliente')
    }
    // * PUT method
    console.log(data, postNumber.value)
    putData(data, postNumber.value).then((response) => {
      if (response.status === 200) {
        console.log('status 200')
      }
    })
    return alert('actualizado correctamente')
  }

  // * POST method
  postData(data).then((response) => {
    if (response.status === 200) {
      console.log('creado correctamente')
    }
  })
})
