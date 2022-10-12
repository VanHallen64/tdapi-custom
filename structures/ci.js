var request = require('request-promise');

/**
 * CI class
 * @constructor
 * @param {TDAPI}  client
 * @param {Object} properties
 * 
 * @property {Number} ID - The ID of the configuration item.
 * @property {Number} AppID - The ID of the asset/CI application containing the configuration item.
 * @property {String} AppName - The name of the asset/CI application containing the configuration item.
 * @property {Number} FormID	- The ID of the form associated with the configuration item.
 * @property {String} FormName - The name of the form associated with the configuration item.
 * @property {Boolean|null} IsSystemMaintained - Whether the configuration item is maintained automatically by the system.
 * @property {Number} BackingItemID - The ID of the underlying TeamDynamix item in the system that this configuration item represents.
 * @property {String} Name - The name of the configuration item.
 * @property {String} TypeID - The ID of the type associated with the configuration item.
 * @property {String} TypeName - The name of the type associated with the configuration item.
 * @property {Number} MaintenanceScheduleID - The ID of the maintenance window associated with the configuration item.
 * @property {String} MaintenanceScheduleName - The name of the maintenance window associated with the configuration item.
 * @property {Guid} OwnerUID	- The UID of the owner associated with the configuration item.
 * @property {String} OwnerFullName - The full name of the owner associated with the configuration item.
 * @property {Number} OwningDepartmentID - The ID of the owning acct/dept associated with the configuration item.
 * @property {String} OwningDepartmentName - The name of the owning acct/dept associated with the configuration item.
 * @property {Number} OwningGroupID - The ID of the owning group associated with the configuration item.
 * @property {String} OwningGroupName - The name of the owning group associated with the configuration item.
 * @property {Number} LocationID	- The ID of the location associated with the configuration item.
 * @property {String} LocationName - The name of the location associated with the configuration item.
 * @property {Number} LocationRoomID	- The ID of the location room associated with the configuration item.
 * @property {String} LocationRoomName - The name of the location room associated with the configuration item.
 * @property {Boolean|null} IsActive	- The active status of the configuration item. This will default to true.
 * @property {Date|null} CreatedDateUtc - The created date of the configuration item.
 * @property {Guid} CreatedUid - The UID of the user who created the configuration item.
 * @property {String} CreatedFullName - The full name of the user who created the configuration item.
 * @property {Date|null} ModifiedDateUtc - The last modified date of the configuration item.
 * @property {Guid} ModifiedUid - The UID of the user who last modified the configuration item.
 * @property {String} ModifiedFullName - The full name of the user who created the configuration item.
 * @property {String|null} ExternalID - The external ID of the configuration item. This value is used to map the configuration item to its representation in external sources such as third-party CMDBs.
 * @property {Number} ExternalSourceID - The ID of the configuration item source associated with the configuration item.
 * @property {String} ExternalSourceName - The name of the configuration item source associated with the configuration item.
 * @property {CustomAttribute[]|null} Attributes - The custom attributes associated with the configuration item.
 * @property {Attachment[]|null} Attachments - The attachments associated with the configuration item.
 * @property {String} Uri - The URI to retrieve the full details of the configuration item via the web API.
*/
function CI(client, properties) {
    this.client = client;
    Object.defineProperty(this, 'client', { enumerable: false, configurable: false});
  
    if(properties) this.init(properties);
  }
  
  CI.prototype.init = function(properties) {
    for(var property in properties) {
      this[property] = properties[property];
    }
  };
  
  /**
   * Updates the CI.
   * @returns {Promise<CI>}
   */
  CI.prototype.update = function() {
    return this.login()
       .then(bearerToken => {
        return request({
          method: 'POST',
          url: `${this.client.baseUrl}/${this.AppId}/cmdb/${this.ID}`,
          auth: { bearer: bearerToken },
          json: true,
          body: this
        });
      })
      .catch(handleError);
  };
  
  /**
   * Gets the feed entries for the CI.
   * @returns {Promise<ItemUpdate>}
   */
  CI.prototype.getFeedEntries = function() {
    return this.login()
       .then(bearerToken => {
        return request({
          method: 'GET',
          url: `${this.client.baseUrl}/${this.AppId}/cmdb/${this.ID}/feed`,
          auth: { bearer: bearerToken },
          json: true
        });
      })
      .catch(handleError);
  };
  
  /**
   * Adds a comment to the CI.
   * @param {FeedEntry} feedEntry - The item update containing the comment.
   * @returns {Promise<ItemUpdate>}
   */
  CI.prototype.addFeedEntry = function(feedEntry) {
    return this.login()
       .then(bearerToken => {
        return request({
          method: 'POST',
          url: `${this.client.baseUrl}/${this.AppId}/cmdb/${this.ID}/feed`,
          auth: { bearer: bearerToken },
          json: true,
          body: feedEntry
        });
      })
      .catch(handleError);
  };

  /**
   * Gets the relationships for the CI.
   * @returns {Promise<ItemUpdate>}
   */
   CI.prototype.getRelationships = function() {
    return this.login()
       .then(bearerToken => {
        return request({
          method: 'GET',
          url: `${this.client.baseUrl}/${this.AppId}/cmdb/${this.ID}/relationships`,
          auth: { bearer: bearerToken },
          json: true
        });
      })
      .catch(handleError);
  };
  
  /**
   * Removes the CI from a ticket.
   * @param {Number} typeId - The ID of the associated relationship type.
   * @param {Number} otherItemId - The ID of the other configuration item.
   * @param {Boolean} isParent - If true, indicates that the configuration item identified by id will be the parent; otherwise, indicates that the configuration item specified by otherItemId will be the parent.
   * @param {Boolean} removeExisting - If true, will remove existing relationships for the item that match the typeId/isParent combination.
   * @returns {Promise<Object>} message
   */
  CI.prototype.addRelationship = function(typeId, otherItemId, isParent, removeExisting) {
    return this.login()
       .then(bearerToken => {
        return request({
          method: 'PUT',
          url: `${this.client.baseUrl}/${this.AppId}/cmdb/${this.ID}/relationships?typeId=${typeId}&otherItemId=${otherItemId}&isParent=${isParent}&removeExisting=${removeExisting}`,
          auth: { bearer: bearerToken },
          json: true
        });
      })
      .catch(handleError);
  };
  
  // Generic error handling - TODO: Improve error detail
  function handleError(err) {
    return Promise.reject(err);
  }
  
  module.exports = CI;