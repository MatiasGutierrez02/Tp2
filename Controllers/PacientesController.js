import { Paciente } from "../Models/index.js";

class PacientesController {
  constructor() {}
  getAllPacientes = async (req, res, next) => {
    try {
      const result = await Paciente.findAll({
        attributes:[ "Nombre", "Apellido", "DNI"]
      });
      if (result.length === 0) throw new Error("No se encontraron pacientes");
      res.send({ success: true, message: "Pacientes encontrados", result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  getPacienteById = async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log(id)
      const result = await Paciente.findOne({
        where: {
          DNI:id
        },
        attributes:[ "Nombre", "Apellido", "DNI"]

      });
      console.log(result)
      if (!result) throw new Error("No se encontro el  Paciente");
      res.send({ success: true, message: "Paciente encontrado", result });
    } catch (error) {
        res.status(400).send({ success: false, result: error.message });
    }
  };
  createPaciente = async (req, res, next) => {
    try {
      const { DNI, Sexo, Mail, Codigo, Telefono, Nombre,FechaRegistro,UltimaConsulta,ObraSocial,NumeroAfiliado,Direccion,Localidad,ClienteActivo, Apellido } = req.body;
      const result = await Paciente.create({ DNI, Sexo, Mail, Codigo, Telefono, Nombre,FechaRegistro,UltimaConsulta,ObraSocial,NumeroAfiliado,Direccion,Localidad,ClienteActivo, Apellido });
      if (!result.dataValues) throw new Error("No se pudo crear el Paciente");
      res
        .status(200)
        .send({ success: true, message: "Paciente creado con exito" });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  updatePacienteById = async (req, res, next) => {
    try {
      const result = Paciente;
    } catch (error) {}
  };
  deletePacienteById = async (req, res, next) => {
    try {
      const result = Paciente;
    } catch (error) {}
  };
}

export default PacientesController;