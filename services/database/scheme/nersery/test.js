const Sequelize = require("sequelize");
const database = require('../../../database');

 
const Student = database.provider.sequelize.define("student", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
});
   
const Course = database.provider.sequelize.define("course", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
});
 
// промежуточная сущность, которая связывает курс и студента
const Enrolment = database.provider.sequelize.define("enrolment", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    grade: {                    // оценка студента по данному курсу
      type: Sequelize.INTEGER,
      allowNull: false
    }
});
 
Student.belongsToMany(Course, { through: Enrolment});
Course.belongsToMany(Student, { through: Enrolment});