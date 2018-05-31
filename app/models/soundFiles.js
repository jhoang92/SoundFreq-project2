module.exports = function(sequelize, DataTypes) {
  var SoundFile = sequelize.define("SoundFile", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    }
  });
  return SoundFile;
};
