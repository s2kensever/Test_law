const db = require("../utils/db");
// const codeService = require('./code.service');

const addNewContactWithGmail = async ({ fullName, gmail, address, phoneNumber, content }) => {
    const sql = `insert into contactwidthgmail(fullName,gmail,address,phoneNumber,content) values(?,?,?,?,?)`;
    await db.queryOne(sql, [fullName, gmail, address, phoneNumber, content]);
    return "Add Contect Successfully";
};

// const update = async ({ Ten, SDT, NgaySinh, Email }, username) => {
//     const sql = `update User set Ten = ?, SDT = ?, NgaySinh = ?, Email = ? where TaiKhoan = ? `;
//     await db.queryOne(sql, [Ten, SDT, NgaySinh, Email, username]);
//     return "upate User successfully";
// };

module.exports = {
    addNewContactWithGmail: addNewContactWithGmail,
};
