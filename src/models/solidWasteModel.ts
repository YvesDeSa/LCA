import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface SolidWasteAttributes {
  id: number;
  type: string;
  quantity: number;
  disposal: string;
}

interface SolidWasteCreationAttributes extends Optional<SolidWasteAttributes, 'id'> {}

class SolidWaste extends Model<SolidWasteAttributes, SolidWasteCreationAttributes> implements SolidWasteAttributes {
  public id!: number;
  public type!: string;
  public quantity!: number;
  public disposal!: string;
}

SolidWaste.init({
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
  disposal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'SolidWaste',
  tableName: 'solid_wastes',
});

export default SolidWaste;
