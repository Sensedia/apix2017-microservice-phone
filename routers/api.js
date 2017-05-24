const Joi = require('joi');
const userController = require('../controllers/api.controller.js');

exports.register = (server, options, next) => {

    server.route({
        method: 'POST',
        path: '/usuarios/{usuarioId}/telefones',
        config: {
            handler: userController.salvarTelefone,
            description: 'Salvar telefone',
            notes: 'Salva o telefone do usuario informado',
            tags: ['api'],
            validate: {
                params: {
                    usuarioId: Joi.number()
                        .required()
                        .description('Identificador do usuário'),
                },
                payload: Joi.object({
                    ddd: Joi.number(),
                    numero: Joi.number()
                })
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/usuarios/{usuarioId}/telefones',
        config: {
            handler: userController.buscarTelefones,
            description: 'Buscar telefones',
            notes: 'Retorna todos os telefones do usuario informado',
            tags: ['api'],
            validate: {
                params: {
                    usuarioId: Joi.number()
                        .required()
                        .description('Identificador do usuário'),
                }
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/usuarios/{usuarioId}/telefones/{telefoneId}',
        config: {
            handler: userController.buscarTelefone,
            description: 'Buscar telefones',
            notes: 'Retorna todos os telefones do usuario informado',
            tags: ['api'],
            validate: {
                params: {
                    usuarioId: Joi.number()
                        .required()
                        .description('Identificador do usuario'),
                    telefoneId: Joi.string().guid()
                        .required()
                        .description('Identificador do telefone'),
                }
            }
        }
    });

    next();

};

exports.register.attributes = {
    name: 'api',
    version: '1.0.0'
};