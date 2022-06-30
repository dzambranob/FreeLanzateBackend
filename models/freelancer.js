
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Freelancer extends Model {
    static async findAllFreelancers() {
      const [results, metadata] = await sequelize.query("select * from freelancers join (select id as uid, username, firstName, lastName, avatarUrl from users) as u on freelancers.UserId = u.uid;");
      return results;
    }
    static async findFreelancerById(idFreelancer) {
      const [results, metadata] = await sequelize.query("select * from freelancers join (select id as uid, username, firstName, lastName from users) as u on freelancers.UserId = u.uid where id = ?",{replacements:[idFreelancer]});
      return results;
    }
    static async findFreelancerByUserId(idUser) {
      const [results, metadata] = await sequelize.query("select * from freelancers where userId = ?",{replacements:[idUser]});
      return results;
    }
    static async profileInfoFreelancerById(idFreelancer) {
      const [results, metadata] = await sequelize.query("select * from freelancers join users u on freelancers.UserId = u.id join posts p on freelancers.id = p.FreelancerId where freelancers.id = ?" ,{replacements:[idFreelancer]});
      return results;
    }
    static async getPosts(idFreelancer) {
      const [results, metadata] = await sequelize.query("select * from freelancers join posts p on freelancers.id = p.FreelancerId where freelancers.id = ?" ,{replacements:[idFreelancer]});
      return results;
    }
    static async getIdByUserId(userId) {
      const [results, metadata] = await sequelize.query("select freelancers.id from freelancers join users u on freelancers.UserId = u.id where u.id = ?" ,{replacements:[userId]});
      return results;
    }

    static associate(models) {
      Freelancer.hasMany(models.Post, {
        foreignKey: {
          allowNull: false,
          onUpdate: 'CASCADE',
        }
      });
      Freelancer.belongsTo(models.User, {
        allowNull: false,
        onUpdate: 'CASCADE',
      });
    }
  }
  Freelancer.init({
    freelancerRating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    oneliner: {
      type: DataTypes.TEXT
    },
    facebookUrl: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    twitterUrl: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    instagramUrl: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    linkedinUrl: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    websiteUrl: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    freelancerDescription: {
      type: DataTypes.TEXT
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postalCode: {
      type: DataTypes.INTEGER, 
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Freelancer',
  });
  return Freelancer;
};
