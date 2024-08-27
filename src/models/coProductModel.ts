import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface CoProductAttributes {
  id: number;
  type: string;
  quantity: number;
  economic_value: number;
}

interface CoProductCreationAttributes extends Optional<CoProductAttributes, 'id'> {}

class CoProduct extends Model<CoProductAttributes, CoProductCreationAttributes> implements CoProductAttributes {
  public id!: number;
  public type!: string;
  public quantity!: number;
  public economic_value!: number;
}

CoProduct.init({
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
  modelName: 'CoProduct',
  tableName: 'co_products',
});

export default CoProduct;
