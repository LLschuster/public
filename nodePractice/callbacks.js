let empleados = [{
        id: 1,
        nombre: 'Leonardo',
    },
    {
        id: 2,
        nombre: 'Maria'
    },
    {
        id: 3,
        nombre: 'juan'
    }
];
let salarios = [{
        id: 1,
        salario: 2500
    },
    {
        id: 2,
        salario: 3000
    },
    {
        id: 3

    }
];

let getSalario = (empleado, callback) => {

    if (!empleado) {
        callback('no existe el empleado');
    } else {
        if (!salarios[empleado.id - 1].salario) {
            callback('este individuo es pasante parece');
        } else { callback(null, empleado); }
    }



}

getSalario(empleados[1], (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(`El salario de ${empleado.nombre} es ${salarios[empleado.id - 1].salario}`);
});