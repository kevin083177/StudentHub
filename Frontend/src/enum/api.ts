const ip = import.meta.env.VITE_IP;
const port = import.meta.env.VITE_PORT;

export const api = {
    findAll: `http://${ip}:${port}/api/v1/user/findAll`,
    findByName: `http://${ip}:${port}/api/v1/user/findByName`,
    findById: `http://${ip}:${port}/api/v1/user/findById`,
    insertOne: `http://${ip}:${port}/api/v1/user/insertOne`,
    deletedById: `http://${ip}:${port}/api/v1/user/deletedById`,
    deletedByName: `http://${ip}:${port}/api/v1/user/deletedByName`,
    updateByName: `http://${ip}:${port}/api/v1/user/updateByName`,
    updateById: `http://${ip}:${port}/api/v1/user/updateById`,
};