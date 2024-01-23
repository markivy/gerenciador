'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('material', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tecnicoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tecnico', // Nome da tabela referenciada (geralmente no plural)
          key: 'id', // Chave primária na tabela tecnico
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      takedItens: {
        type: Sequelize.STRING,
        allowNull: true // Defina com base em sua lógica de negócios
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
    await queryInterface.dropTable('material');
  }
};

