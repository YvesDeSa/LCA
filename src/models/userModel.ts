import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

// Defina a interface para os atributos do modelo de usuário
interface UserAttributes {
  id: number;
  username: string;
  password: string;
  role: string; // Adiciona o atributo 'role'
}

// Defina a interface para os atributos de criação do usuário (sem o 'id')
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// Classe User que implementa os atributos e a interface de criação
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public password!: string;
  public role!: string;
}

// Inicializa o modelo User
User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: new DataTypes.STRING(128),
    allowNull: false,
    unique: true,
  },
  password: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: 'user', // Define o valor padrão como 'user'
  },
}, {
  tableName: 'users',
  sequelize,
});

export default User;
