import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface SlurryWasteAttributes {
  id: number;
  type: string;
  quantity: number;
  treatment: string;
  density: number;
}

interface SlurryWasteCreationAttributes extends Optional<SlurryWasteAttributes, 'id'> {}

class SlurryWaste extends Model<SlurryWasteAttributes, SlurryWasteCreationAttributes> implements SlurryWasteAttributes {
  public id!: number;
  public type!: string;
  public quantity!: number;
  public treatment!: string;
  public density!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SlurryWaste.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Type is required',
      },
      notEmpty: {
        msg: 'Type cannot be empty',
      },
    },
  },
  quantity: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Quantity is required',
      },
      min: {
        args: [0],
        msg: 'Quantity must be greater than zero',
      },
    },
  },
  treatment: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Treatment is required',
      },
      notEmpty: {
        msg: 'Treatment cannot be empty',
      },
    },
  },
  density: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Density is required',
      },
      min: {
        args: [0],
        msg: 'Density must be greater than zero',
      },
    },
  },
}, {
  sequelize,
  modelName: 'SlurryWaste',
  tableName: 'slurry_waste',
  timestamps: true,
});

export default SlurryWaste;
