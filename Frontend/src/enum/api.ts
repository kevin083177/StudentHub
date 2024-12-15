const ip = import.meta.env.VITE_IP;

export const api = {
    findAll: `http://${ip}/api/v1/user/findAll`,
    findByName: `http://${ip}/api/v1/user/findByName`,
    findById: `http://${ip}/api/v1/user/findById`,
    insertOne: `http://${ip}/api/v1/user/insertOne`,
    deletedById: `http://${ip}/api/v1/user/deletedById`,
    deletedByName: `http://${ip}/api/v1/user/deletedByName`,
    updateByName: `http://${ip}/api/v1/user/updateByName`,
    updateById: `http://${ip}/api/v1/user/updateById`,
};