import validator from 'validator'

export function validarUsuario(formRef) {
  let msg = 'ok'

  // TODO recortar el array de inputs
  const inputs = Array.from(formRef.current.childNodes).slice(0, 11)

  // TODO verificar que los campos no esten vacíos

  inputs.forEach(({ value }) => {
    // ? validamos que los terminos Provincia y Ciudad no sean aceptados
    if (
      validator.isEmpty(value) ||
      value === 'Provincia' ||
      value === 'Ciudad'
    ) {
      return (msg = 'Todos los campos son obligatorios')
    }
  })

  // TODO verificar input por tipo
  // verificando email
  if (!validator.isEmail(inputs[2].value)) {
    return (msg = 'El correo no es valido')
  }
  // verificando edad
  if (!validator.isInt(inputs[3].value, { min: 18, max: 120 })) {
    return (msg = 'La edad no es valida')
  }
  // verificando telefono
  // eliminando espacios en blanco
  const telefono = inputs[4].value.replace(/\s/g, '')
  const regex = /[^0-9]/
  /* if (!validator.isMobilePhone(telefono)) {
    return (msg = 'El telefono no es valido')
  } */
  if (regex.test(telefono)) {
    return (msg = 'El telefono no es valido')
  }

  // verificando que las contraseñas sean iguales
  if (inputs[9].value !== inputs[10].value) {
    return (msg = 'Las contraseñas no coinciden')
  }

  // verificar que la contraseña tenga al menos 4 caracteres
  if (inputs[9].value.length < 4) {
    return (msg = 'La contraseña debe tener al menos 4 caracteres')
  }

  return msg
}
