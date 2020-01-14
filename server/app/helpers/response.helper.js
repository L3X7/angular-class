var response = {
    helper: {
        response200: () => {
            return {
                status: 200,
                message: 'Success',
                parameters: {}
            }
        },
        response400: () => {
            return {
                status: 400,
                message: 'Bad Request',
                parameters: {}
            }
        },
        response401: () => {
            return {
                status: 401,
                message: 'Unauthorized',
                parameters: {}
            }
        },
        response500: () => {
            return {
                status: 500,
                message: 'Error Server',
                parameters: {}
            }
        },

        getPropertiesFromSchema: (Schema) => {
            return Object.keys(Schema.schema.paths);
        },
        prepareToCreateForSchema: (form, properties, schema) => {
            properties.forEach(key => {
                if (key in form) {
                    schema[key] = form[key];
                }
            });
            return schema;
        }
    }
}
module.exports = response;