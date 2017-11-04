import * as validate from 'validate.js';

validate.validators.datetime.options = {
    notValid: 'El valor introducido no es válido',
    tooEarly: 'La fecha debe ser después de %{date}',
    tooLate: 'La fecha debe ser antes de %{date}',
}

validate.validators.email.options = {
    message: 'Debe ser un mail válido'
}

validate.validators.equality.options = {
    message: 'Condición de igualdad no cumplida'
}

validate.validators.format.options = {
    message: 'Formato inválido'
}

validate.validators.length.options = {
    wrongLength: 'La longitud debe ser igual a %{count}',
    tooShort: 'La longitud mínima es %{count}',
    tooLong: 'La longitud máxima es %{count}'
};

validate.validators.numericality.options = {
    notValid: 'No es un número válido',
    notInteger: 'Debe ser un número entero',
    notGreaterThan: 'El número introducido debe ser mayor a %{count}',
    notGreaterThanOrEqualTo: 'El número introducido debe ser mayor o igual a %{count}',
    notEqualTo: 'El número introducido debe ser igual a %{count}',
    notLessThan: 'El número introducido debe ser menor a %{count}',
    notLessThanOrEqualTo: 'El número introducido debe ser menor o igual a %{count}',
    notDivisibleBy: 'El número introducido debe ser divisible por %{count}',
    notOdd: 'El número introducido debe ser impar',
    notEven: 'El número introducido debe ser par'
}

validate.validators.presence.options = {
    message: 'Campo obligatorio'
};

validate.validators.url.options = {
    message: 'No es una url válida'
};

/**
 * Realiza la validacion de un valor de acuerdo a la especificacion de validacion pasada. Retorna
 * el mensaje de error en caso de que la validacion sea fallida, o undefined en caso de que no exista
 * error de validacion
 * @param {* el valor a validar} value 
 * @param {* la especificacion de validacion de validate.js} validations 
 */
export const validateValue = (value, validations) => {
    if (!validations) {
        return undefined;
    }
    const errors = validate.single(value, validations);
    return errors ? errors.join('. ') : undefined;
}

/**
 * Realiza las validaciones de los fields en value de acuerdo a la especificacion encontrada
 * en los fields de validations. Retorna un Object Literal con la cadena de error de validacion
 * para cada field encontrado en validations.
 * @param {* el object literal que contiene todos los fields a validar} value 
 * @param {* object literal con los fields que contienen las especificaciones} validations 
 */
export const validateObjectLiteral = (value, validations) => (
    Object.keys(validations).reduce((nextState, element) => {
        const validated = validate.single(value[element], validations[element]);
        nextState[element] = validated ? validated.join('. ') : undefined;
        return nextState;
    }, {})
)

/**
 * Realiza la validacion de un field presente en un object literal pasado como argumento.
 * Construye nuevo object literal de estado de validaciones, agregando unicamente la validacion
 * del field especificado.
 * @param {* el item con el campo a validar} item 
 * @param {* el object literal con el estado actual de validaciones} currentValidationState 
 * @param {* el field a validar} field 
 * @param {* el spec de validations.js para realizar la validacion del field} validation 
 */
export const validateFieldAndBuildState = (item, currentValidationState = {}, field, validation) => {
    const validationError = validateValue(item[field], validation);
    const validations = { ...currentValidationState };
    validations[field] = validationError;
    return validations;
}

/**
 * Verifica si hay errores de validacion en el estado de validacion pasado como parametro
 * @param {* el object literal que contiene el estado de la validacion} currentValidationState 
 */
export const hasValidationError = currentValidationState =>
    Object.keys(currentValidationState).reduce(
        (accumulator, currentValue) => accumulator || currentValidationState[currentValue],
        false);

export default validate;
