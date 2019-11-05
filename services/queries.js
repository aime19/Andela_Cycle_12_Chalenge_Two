import { pool } from './config';

const users = {
  insertUser: `INSERT INTO users( first_name, last_name, email , password) VALUES($1 ,$2, $3, $4) RETURNING *`,
  isUserExist: `SELECT * FROM users WHERE email = $1`,
  userById: `SELECT * FROM users WHERE id = $1`,
  updateUser: `UPDATE users SET first_name=$1, last_name=$2, email=$3 WHERE id=$4`,
  updatePassword: `UPDATE users SET password=$1 WHERE id=$2`,
};
const entries = {
  getAllStories: `SELECT * FROM stories WHERE auther=$1`,
  getOneStory: `SELECT * FROM stories WHERE auther=$1 AND id=$2`,
  deleteStory: `DELETE FROM stories WHERE auther=$1 AND id=$2`,
  updateStory: `UPDATE stories SET subject=$1,content=$2 WHERE auther=$1 AND id=$2`,
};

export default { users, entries };
