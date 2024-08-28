import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

interface RockExtractionEntryAttributes {
  id: number;
  selection: string;
  type: string;
  quantity: number;
  annotation: string;
}

interface RockExtractionEntryCreationAttributes extends Optional<RockExtractionEntryAttributes, 'id'> {}

class RockExtractionEntry extends Model<RockExtractionEntryAttributes, RockExtractionEntryCreationAttributes> implements RockExtractionEntryAttributes {
  public id!: number;
  public selection!: string;
  public type!: string;
  public quantity!: number;
  public annotation!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

RockExtractionEntry.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  selection: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  annotation: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'RockExtractionEntry',
  tableName: 'rock_extraction_entries',
  timestamps: true,
});

export default RockExtractionEntry;
