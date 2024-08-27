import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface RockAttributes {
  id: number;
  type: string;
  total_quantity: number;
  weight: number;
}

interface RockCreationAttributes extends Optional<RockAttributes, 'id'> {}

class Rock extends Model<RockAttributes, RockCreationAttributes> implements RockAttributes {
  public id!: number;
  public type!: string;
  public total_quantity!: number;
  public weight!: number;
}

Rock.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total_quantity: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Rock',
  tableName: 'rocks',
});

export default Rock;
