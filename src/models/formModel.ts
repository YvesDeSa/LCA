import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface FormAttributes {
  id?: number;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface FormCreationAttributes extends Optional<FormAttributes, 'id'> {}

class Form extends Model<FormAttributes, FormCreationAttributes> implements FormAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Form.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
}, {
  tableName: 'forms',
  sequelize,
  timestamps: true,
});

export default Form;
