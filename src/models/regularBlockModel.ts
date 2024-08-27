import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface RegularRockAttributes {
  id: number;
  type: string;
  quantity: number;
  economic_value: number;
}

interface RegularRockCreationAttributes extends Optional<RegularRockAttributes, 'id'> {}

class RegularRock extends Model<RegularRockAttributes, RegularRockCreationAttributes> implements RegularRockAttributes {
  public id!: number;
  public type!: string;
  public quantity!: number;
  public economic_value!: number;
}

RegularRock.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  economic_value: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'RegularRock',
  tableName: 'regular_rocks',
});

export default RegularRock;
