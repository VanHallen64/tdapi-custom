var request = require('request-promise');

/**
 * Relationship class
 * @constructor
 * @param {TDAPI}  client
 * @param {Object} properties
 * 
 * @property {Number} ID -	The ID of the relationship.
 * @property {Number} ParentID	- The ID of the parent configuration item associated with the relationship.
 * @property {String} ParentName	- The name of the parent configuration item associated with the relationship.
 * @property {Number} ParentTypeID	- The ID of the type associated with the relationship's parent configuration item.
 * @property {String} ParentTypeName	- The name of the type associated with the relationship's parent configuration item.
 * @property {Number} ChildID	- The ID of the child configuration item associated with the relationship.
 * @property {String} ChildName	- The name of the child configuration item associated with the relationship.
 * @property {Number} ChildTypeID	-	The ID of the type associated with the relationship's child configuration item.
 * @property {String} ChildTypeName	-	The name of the type associated with the relationship's child configuration item.
 * @property {Boolean|null} IsSystemMaintained	-	Whether this relationship is maintained automatically by the system.
 * @property {Number} RelationshipTypeID	-	The ID of the type associated with the relationship.
 * @property {String} Description	-	The description of the relationship from the perspective of the parent configuration item.
 * @property {String} InverseDescription	-	The description of the relationship from the perspective of the child configuration item.
 * @property {Boolean|null} IsOperationalDependency	-	Whether the relationship is an operational dependency.
 * @property {Boolean|null} CreatedDateUtc	-	The created date of the relationship.
 * @property {Guid} CreatedUID	- The UID of the user who created the relationship.
 * @property {String} CreatedFullName	-	The full name of the user who created the relationship.
*/
function Relationship(client, properties) {
    this.client = client;
    Object.defineProperty(this, 'client', { enumerable: false, configurable: false});
  
    if(properties) this.init(properties);
  }
  
  Relationship.prototype.init = function(properties) {
    for(var property in properties) {
      this[property] = properties[property];
    }
  };
  
  // Generic error handling - TODO: Improve error detail
  function handleError(err) {
    return Promise.reject(err);
  }
  
  module.exports = Relationship;