import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface SlurryAfterTreatmentAttributes {
  id: number;
  quantity: number;
  density: number;
  disposal: string;
}

interface SlurryAfterTreatmentCreationAttributes extends Optional<SlurryAfterTreatmentAttributes, 'id'> {}

class SlurryAfterTreatment extends Model<SlurryAfterTreatmentAttributes, SlurryAfterTreatmentCreationAttributes> 
  implements SlurryAfterTreatmentAttributes {
  public id!: number;
  public quantity!: number;
  public density!: number;
  public disposal!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SlurryAfterTreatment.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      notNull: { msg: 'Quantity is required' },
      min: { args: [0], msg: 'Quantity must be greater than zero' },
    },
  },
  density: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      notNull: { msg: 'Density is required' },
      min: { args: [0], msg: 'Density must be greater than zero' },
    },
  },
  disposal: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Disposal is required' },
      notEmpty: { msg: 'Disposal cannot be empty' },
    },
  },
}, {
  sequelize,
  modelName: 'SlurryAfterTreatment',
  tableName: 'slurry_after_treatment',
  timestamps: true,
});

export default SlurryAfterTreatment;
