
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tecnico', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING(255), // Definindo um limite de comprimento
        allowNull: false // Se o nome é obrigatório
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tecnico');
  }
};
