module.exports = function(sequelize, DataTypes) {
  var SoundType = sequelize.define("SoundType", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    }
  });
  return SoundType;
};
