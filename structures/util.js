/**
 * @typedef String
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */

/**
 * @typedef Boolean
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
 */

/**
 * @typedef Object
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 */

/**
 * @typedef Array
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

/**
 * @typedef {String|Number} Number
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */

/**
 * @typedef null
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
 */

/**
 * A 128-bit integer Number that represents a unique identifier
 * @typedef {Number|String} Guid
 */

/**
 * A group containing any number of users.
 * @typedef  {Object}  Group
 * @property {Number}  ID              - The group ID.
 * @property {String}  Name            - The group name.
 * @property {String}  Description     - The group description.
 * @property {Boolean} IsActive        - The group's active status.
 * @property {Date}    CreatedDate     - The date/time the group was created.
 * @property {Date}    ModifiedDate    - The date/time the group was last modified.
 */

/**
 * A security role for any number of users. Security roles are essentially a license type and a set of permissions that can be granted to users.
 * @typedef  {Object}   SecurityRole
 * @property {Guid}     ID               - The ID of the security role.
 * @property {String}   Name             - The name of the security role.
 * @property {Date}     CreatedDate      - The created date.
 * @property {Date}     ModifiedDate     - The modified date.
 * @property {Number}   UserCount        - The number of users who have the security role.
 * @property {Number}   AppID            - The ID of the associated application, or 0 if this is a top-level security role.
 * @property {String[]} Permissions      - The permissions granted to users with this security role.
 * @property {Number}   LicenseType      - The license type of the security role.
 * @property {String}   LicenseTypeName  - The name of the license type of the security role.
 */


/**
 * A set of filtering options used for searching users.
 * @typedef  {Object}        UserSearch
 * @property {String}        SearchText      - The search text to perform LIKE-based filtering on.
 * @property {Boolean|null}  IsActive        - The active status to filter on.
 * @property {Boolean|null}  IsEmployee      - The employee status to filter on.
 * @property {String}        AppName         - The name of the application to filter on. If specified, will only include users who have been granted access to this application.
 * @property {Number|null}   AccountID       - The account ID to filter on. If specified, will only include users who list the account as their default.
 * @property {Number|null}   MaxResults      - The maximum number of records to return.
 * @property {Number[]}      ReferenceIDs    - The reference IDs to filter on.
 * @property {String}        ExternalID      - The external ID to filter on.
 * @property {String}        AlternateID     - The alternate ID to filter on.
 * @property {String}        UserName        - The username to filter on.
 * @property {Guid|null}     SecurityRoleID  - The security role ID to filter on. If specified, will only include users who have this security role.
 */

/**
 * A set of filtering options used for searching functional roles.
 * @typedef  {Object}        SecurityRoleSearch
 * @property {String}        NameLike       - The security role name to perform LIKE-based filtering on.
 * @property {Number}        AppID          - The application ID to filter on.
 * @property {Number|null}   LicenseTypeID  - The license type ID to filter on.
 */

/**
 * A set of filtering options used for searching groups.
 * @typedef  {Object}        GroupSearch
 * @property {Boolean|null}  IsActive          - The active status to filter on.
 * @property {String}        NameLike          - The string to use for LIKE-based filtering on the group name.
 * @property {Number|null}   HasAppID          - The ID of the application to filter on. If specified, will only include groups with at least one active member who has been granted access to this application.
 * @property {String}        HasSystemAppName  - The name of the system application to filter on. If specified, will only include groups with at least one active member who has been granted access to this application.
 */

/**
 * A set of filtering options used for searching tickets.
 * @typedef  {Object}             TicketSearch                       - The ticket classificatiosn to filter on. Use Ticket (9) to perform no classification filtering.
 * @property {Number}             TicketClassification               - The maximum number of results to return, or 0 for no limit.
 * @property {Number|null}        TicketID                           - The ticket ID to filter on.
 * @property {Number|null}        ParentTicketID                     - The parent ticket ID to filter on.
 * @property {String}             SearchText                         - The search text to use. Search text will incorporate the title, description, custom attribute text, reference code, and the text of any feed items.
 * @property {Number[]}           StatusIDs                          - The status IDs to filter on.
 * @property {Number[]}           PastStatusIDs                      - The historical status IDs to filter on.
 * @property {Number[]}           StatusClassIDs                     - The status class IDs to filter on.
 * @property {Number[]}           PriorityIDs                        - The priorty IDs to filter on.
 * @property {Number[]}           UrgencyIDs                         - The urgency IDs to filter on.
 * @property {Number[]}           ImpactIDs                          - The impact IDs to filter on.
 * @property {Number[]}           AccountIDs                         - The account/department IDs to filter on.
 * @property {Number[]}           TypeIDs                            - The ticket type IDs to filter on.
 * @property {Number[]}           SourceIDs                          - The source IDs to filter on.
 * @property {Date|null}          UpdatedDateFrom                    - The minimum updated date to filter on. Only tickets that have status changes within the range specified by this value and UpdatedDateTo (and optionally, only by UpdatedByUid) will be included.
 * @property {Date|null}          UpdatedDateTo                      - The maximum updated date to filter on. Only tickets that have status changes within the range specified by this value and UpdatedDateFrom (and optionally, only by UpdatedByUid) will be included.
 * @property {Guid|null}          UpdatedByUid                       - The UID of the updating person to filter on. Only tickets that have status changes by this person (and optionally, only within the date range specified by UpdatedDateFrom and UpdatedDateTo) will be included.
 * @property {Date|null}          ModifiedDateFrom                   - The minimum last modified date to filter on.
 * @property {Date|null}          ModifiedDateTo                     - The maximum last modified date to filter on.
 * @property {Guid|null}          ModifiedByUid                      - The UID of the person who last modified a ticket to filter on.
 * @property {Date|null}          StartDateFrom                      - The minimum start date to filter on.
 * @property {Date|null}          StartDateTo                        - The maximum start date to filter on.
 * @property {Date|null}          EndDateFrom                        - The minimum end date to filter on.
 * @property {Date|null}          EndDateTo                          - The maximum end date to filter on.
 * @property {Date|null}          RespondedDateFrom                  - The minimum responded date to filter on.
 * @property {Date|null}          RespondedDateTo                    - The maximum responded date to filter on.
 * @property {Guid|null}          RespondedByUid                     - The UID of the responding person to filter on,
 * @property {Date|null}          ClosedDateFrom                     - The minimum closed date to filter on.
 * @property {Date|null}          ClosedDateTo                       - The maximum closed date to filter on.
 * @property {Guid|null}          ClosedByUid                        - The UID of the closing person to filter on.
 * @property {Date|null}          RespondByDateFrom                  - The minimum "respond by" deadline to filter on.
 * @property {Date|null}          RespondByDateTo                    - The maximum "respond by" deadline to filter on.
 * @property {Date|null}          CloseByDateFrom                    - The minimum SLA "resolve by" deadline to filter on.
 * @property {Date|null}          CloseByDateTo                      - The maximum SLA "resolve by" deadline to filter on.
 * @property {Date|null}          CreatedDateFrom                    - The minimum created date to filter on.
 * @property {Date|null}          CreatedDateTo                      - The maximum created date to filter on.
 * @property {Guid|null}          CreatedByUid                       - The UID of the creator to filter on.
 * @property {Number|null}        DaysOldFrom                        - The minimum age to filter on.
 * @property {Number|null}        DaysOldTo                          - The maximum age to filter on.
 * @property {Guid[]}             ResponsibilityUids                 - The UIDs of the responsible individuals to filter on. This differs from PrimaryResponsibilityUids in that it includes responsibility from ticket tasks.
 * @property {Number[]}           ResponsibilityGroupIDs             - The IDs of the responsible groups to filter on. This differs from PrimaryResponsibilityGroupIDs in that it includes responsibility from ticket tasks.
 * @property {Boolean|null}       CompletedTaskResponsibilityFilter  - The filter to use for ResponsibilityUids and ResponsibilityGroupIDs with regards to ticket tasks.
 * @property {Guid[]}             PrimaryResponsibilityUids          - The UIDs of the primarily-responsible individuals to filter on.
 * @property {Number[]}           PrimaryResponsibilityGroupIDs      - The primarily-responsible group IDs to filter on.
 * @property {Number[]}           SlaIDs                             - The SLA IDs to filter on.
 * @property {Boolean|null}       SlaViolationStatus                 - The SLA violation status to filter on. A value of true indicates that only tickets with violated SLAs should be included, whereas a value of false indicates that only tickets without a violated SLA (including no SLA) should be included.
 * @property {Number}             SlaUnmetConstraints                - The unmet SLA deadlines to filter on.
 * @property {Number[]}           KBArticleIDs                       - The knowledge base article IDs to filter on.
 * @property {Boolean|null}       AssignmentStatus                   - The assignment status to filter on. A value of true indicates that only tickets assigned to individuals should be included, whereas a value of false indicates that only tickets not assigned to an individual should be included.
 * @property {Boolean|null}       ConvertedToTask                    - The task conversion status to filter on. A value of true indicates that only tickets converted to project asks should be included, whereas a value of false indicates that only tickets not converted to a project task should be included.
 * @property {Guid|null}          ReviewerUid                        - The UID of the reviewing person to filter on. This will include any groups that the reviews belongs to.
 * @property {Guid|null}          SubmitterUid                       - The UID of the submitting person to filter on. Searching for a "submitter" will include any tickets that the person has created and/or requested.
 * @property {Guid|null}          UserAccountsUid                    - The UID of the person to filter on for submission or assocaited accounts/departments. This will return any tikets for which the person is the "submitter", in addition to any tickets that are associated with an account/department that has been explicitly assigned to the person.
 * @property {Guid|null}          UserGroupsUid                      - The UID of the person to filter on for group responsibility. This will return any tickets for which one of the person's groups is primarily responsible.
 * @property {Guid[]}             RequestorUids                      - The requestor UIDs to filter on.
 * @property {String}             RequestorNameSearch                - The text to perform a LIKE/"contains" search on the requestor's full name.
 * @property {String}             RequestorEmailSearch               - The text to perform a LIKE/"contains" search on the requestor's email address.
 * @property {String}             RequestorPhoneSearch               - The text to perform a LIKE/"contains" search on the requestor's phone number.
 * @property {Number[]}           ConfigurationItemIDs               - The IDs of the associated CIs to filter on. To be included in the search results, a ticket must be associated with one or more of the listed CIs.
 * @property {Number[]}           ExcludeConfigurationItemIDs        - The IDs of the associated CIs to exclude on. To be included in the search results, a ticket must NOT be associated with any of the listed CIs.
 * @property {Boolean|null}       IsOnHold                           - The "on hold" status to filter on.
 * @property {Date|null}          GoesOffHoldFrom                    - The minimum "goes off hold" date to filter on.
 * @property {Date|null}          GoldOffHoldTo                      - The maximum "goes off hold" date to filter on.
 * @property {Number[]}           LocationIDs                        - The location IDs to filter on.
 * @property {Number[]}           LocationRoomIDs                    - The location room IDs to filter on.
 * @property {Number[]}           ServiceIDs                         - The associated service IDs to filter on.
 * @property {CustomAttribute[]}  CustomAttributes                   - The custom attributes to filter on.
 * @property {Boolean|null}       HasReferenceCode                   - Sets whether or not the returned tickets should have a reference code.
 */

/**
 * A single custom attribute.
 * @typedef  {Object}                   CustomAttribute
 * @property {Number}                   ID                 - The attribute ID.
 * @property {String}                   Name               - The attribute name.
 * @property {Number}                   Order              - The order of the attribute. Attributes are first sorted by order (ascending) and their name (also ascending).
 * @property {String}                   Description        - The attribute description.
 * @property {Number}                   SectionID          - The ID of the associated attribute section.
 * @property {String}                   SectionName        - The name of the associated attribute section.
 * @property {String}                   FieldType          - The field type of the attribute.
 * @property {String}                   DataType           - The data type of the attribute.
 * @property {CustomAttributeChoice[]}  Choices            - The choices for the attribute.
 * @property {Boolean}                  IsRequired         - A value indicating whether the attribute is required.
 * @property {Boolean}                  IsUpdatable        - A value indicating whether the attribute is updatable.
 * @property {String}                   Value              - The value of the attribute.
 * @property {String}                   ValueText          - The text value of the attribute. For choice attributes, this will be a comma-separated list of all the currently selected choices (referenced by choice ID).
 * @property {String}                   ChoicesText        - The text of the selected choices. This will be a comma-separated list of the text of each selected choice.
 * @property {Number[]}                 AssociatedItemIDs  - The list of all item types (represented as IDs) that are associated with the attribute.
 */

/**
 * A single choice for a custom attribute.
 * @typedef  {Object}   CustomAttributeChoice
 * @property {Number}   ID            - The choice ID.
 * @property {String}   Name          - The name of the choice. This doubles as the display text for the choice.
 * @property {Boolean}  IsActive      - The active status of the choice.
 * @property {Date}     DateCreated   - The date the choice was created.
 * @property {Date}     DateModified  - The date the choice was last modified.
 * @property {Number}   Order         - The order of the choice in the list. Choices are first sorted by order (ascending) and their name (also ascending).
 */

/**
 * A ticket status.
 * @typedef  {Object}   TicketStatus
 * @property {Number}   ID           - The ID of the ticket status.
 * @property {Number}   AppID        - The ID of the containing application.
 * @property {String}   AppName      - The name of the containing application.
 * @property {String}   Name         - The status name.
 * @property {String}   Description  - The status description.
 * @property {Number}   Order        - The order of the status when displayed in a list.
 * @property {Number}   StatusClass  - The status class.
 * @property {Boolean}  IsActive     - A value indicating whether the status is active.
 * @property {Boolean}  IsDefault    - A value indicating whether this status is the default for the application.
 */

/**
 * A feed entry for a Ticket
 * @typedef  {Object}      TicketFeedEntry
 * @property {Number|null} NewStatusID - The new status ID. Leave null or 0 to not change the status.
 * @property {Boolean}     IsPrivate   - A value indicating whether this feed entry is private.
 * @property {String}      Comments    - The comments of the feed entry.
 * @property {String[]}    Notify      - The individuals to notify.
 */

/**
 * A feed entry that has already been posted
 * @typedef  {Object}            ItemUpdate
 * @property {Number}            ID               - The ID of the feed entry.
 * @property {Guid}              CreatedUid       - The UID of the creator.
 * @property {Number}            CreatedRefID     - The integer based ID of the creator.
 * @property {String}            CreatedFullName  - The full name of the creator.
 * @property {String}            CreatedFirstName - The first name of the creator.
 * @property {String}            CreatedLastName  - The last name of the creator.
 * @property {String}            CreatedByPicPath - The path to the creator's profile picture.
 * @property {Date}              CreatedDate      - The creation date of the feed entry.
 * @property {Date}              LastUpdatedDate  - The date the feed entry was last updated. Replying to this feed entry will update this date.
 * @property {Number}            ProjectID        - The ID of the associated project.
 * @property {String}            ProjectName      - The name of the associated project.
 * @property {Number}            PlanID           - The ID of the associated plan or ticket.
 * @property {String}            PlanName         - The name of the associated plan or ticket.
 * @property {Number}            ItemType         - The item type.
 * @property {Number}            ItemID           - The item ID.
 * @property {String}            ItemTitle        - The item title.
 * @property {Guid|null}         ReferenceID      - The reference ID. This value is used when the associated item is normally referred to by a GUID.
 * @property {String}            Body             - The body of the feed entry.
 * @property {Number}            UpdateType       - The type of the feed entry.
 * @property {String}            NotifiedList     - The list of notified people.
 * @property {Boolean}           IsPrivate        - A value indicating whether this feed entry is private.
 * @property {Boolean}           IsParent         - A value indicating whether this feed entry is a parent for other feed entries.
 * @property {Object[]}          Replies          - The replies to this feed entry.
 * @property {Number}            RepliesCount     - The number of replies to this feed entry.
 * @property {ItemUpdateLike[]}  Likes            - The likes for this feed entry.
 * @property {Boolean}           ILike            - A value indicating whether the current user "liked" this feed entry.
 * @property {Number}            LikesCount       - The number of likes for this feed entry.
 * @property {Object[]}          Participants     - The participants. This list consists of the person who is responsible for the original feed entry as well as any other individuals who have replied to it.
 * @property {String}            BreadcrumbsHtml  - The breadcrumbs HTML. This is not loaded from the databse; it is used purely for the purpose of sending HTML to the client for rendering breadcrumbs, and should not be populated by the calling application.
 * @property {Boolean}           HasAttachment    - A value indicating whether this instance has an attachment.
 */

/**
 * A reply to a feed entry
 * @typedef  {Object}  ItemUpdateReply
 * @property {Number}  ID              - The ID of the reply
 * @property {String}  Body            - The body of the reply
 * @property {Guid}    CreatedUid      - The UID of the person making the reply
 * @property {String}  CreatedFullName - The full name of the person making the reply
 * @property {Date}    CreatedDate     - The date of the reply
 */

/**
 * A "like" of a feed entry
 * @typedef  {Object} ItemUpdateLike
 * @property {Number} ID           - The ID of the "like"
 * @property {String} UserFullName - The full name of the person making the "like"
 * @property {Guid}   Uid          - The UID of the person making the "like"
 */

/**
 * A participant in a feed discussion
 * @typedef  {Object} Participant
 * @property {String} FullName - The full name of the participant
 * @property {String} Email    - The email address of the participant
 */

/**
 * An attachment.
 * @typedef  {Object} Attachment
 * @property {Guid}   ID              - The attachment ID.
 * @property {Number} AttachmentType  - The attachment type.
 * @property {Number} ItemID          - The item ID.
 * @property {Guid}   CreatedUid      - The UID of the creator.
 * @property {String} CreatedFullName - The full name of the creator.
 * @property {Date}   CreatedDate     - The creation date.
 * @property {String} Name            - The file name.
 * @property {Number} Size            - The size of the attachment, in bytes.
 * @property {String} Uri             - The URI for this attachment.
 * @property {String} ContentUri      - The URI to retrieve the attachment content.
 */

/**
 * A ticket task or activity.
 * @typedef  {Object}      TicketTask
 * @property {Number}      ID                      - The ID of the task.
 * @property {Number}      TicketID                - The ID of the associated ticket.
 * @property {String}      Title                   - The title.
 * @property {String}      Description             - The description.
 * @property {Boolean}     IsActive                - A value indicating whether this task is active. Tasks are inactive if their predecessor task has not been completed.
 * @property {Date|null}   StartDate               - The start date.
 * @property {Date|null}   EndDate                 - The end date.
 * @property {Number|null} CompleteWithinMinutes   - The expected duration, in minutes, of the task. This value is in operational minutes, and so operational hours, weekends, and days off are all taken into account.
 * @property {Number}      EstimatedMinutes        - The estimated minutes.
 * @property {Number}      ActualMinutes           - The time, in minutes, entered against the task/activity.
 * @property {Number}      PercentComplete         - The percent complete.
 * @property {Date}        CreatedDate             - The created date.
 * @property {Guid}        CreatedUid              - The UID of the creator.
 * @property {String}      CreatedFullName         - The full name of the creator.
 * @property {String}      CreatedEmail            - The email address of the creator.
 * @property {Date}        ModifiedDate            - The last modified date.
 * @property {Guid}        ModifiedUid             - The UID of the last person to modify the task.
 * @property {String}      ModifiedFullName        - The full name of the last person to modify the task.
 * @property {Date}        CompletedDate           - The completed date.
 * @property {Guid|null}   CompletedUid            - The UID of the person who completed the task.
 * @property {String}      CompletedFullName       - The full name of the person who completed the task.
 * @property {Guid|null}   ResponsibleUid          - The UID of the responsible person.
 * @property {String}      ResponsibleFullName     - The full name of the responsible person,
 * @property {String}      ResponsibleEmail        - The email address of the responsible person.
 * @property {Number}      ResponsibleGroupID      - The ID of the responsible group.
 * @property {String}      ResponsibleGroupName    - The name of the responsible group.
 * @property {Number}      PredecessorID           - The ID of the predecessor task.
 * @property {String}      PredecessorTitle        - The title of the predecessor task.
 * @property {Number}      Order                   - The order in which the task should be displayed in the list of the ticket's tasks/activities.
 * @property {Number}      TypeID                  - The type ID. This indicates if this is a regular ticket task, a scheduled maintenance activity, or something else.
 * @property {Number}      DetectedConflictCount   - The total number of detected conflicts for this task/maintenance activity.
 * @property {Number}      DetectedConflictTypes   - The types of detected conflicts for this task/maintenance activity.
 * @property {Date}        LastConflictScanDateUtc - The UTC date/time this task/activity was last scanned for conflicts.
 */

/**
 * A single person, group, or account/department.
 * @typedef  {Object} ResourceItem
 * @property {String} ItemRole             - The role this person or group has on the associated item.
 * @property {String} Name                 - The name of this person or group.
 * @property {String} Initials             - The initials to be displayed if no profile image is specified for the item.
 * @property {String} Value                - The value of the item.
 * @property {Number} RefValue             - The reference value.
 * @property {String} ProfileImageFileName - The profile image file name.
 */

/**
 * A set of filtering options used for searching accounts/departments.
 * @typedef  {Object}            AccountSearch
 * @property {String}            SearchText       - The search text to use.
 * @property {CustomAttribute[]} CustomAttributes - The custom attributes to filter on.
 * @property {Number[]}          MaxResults       - The maximum number of records to return.
 */

/**
 * A room at a location.
 * @typedef  {Object} LocationRoom
 * @property {Number} ID              - The ID.
 * @property {String} Name            - The name.
 * @property {String} ExternalID      - The external identifier for the room.
 * @property {Number} AssetsCount     - The number of assets associated with this room.
 * @property {Number} TicketsCount    - The number of tickets associated with this room.
 * @property {Date}   CreatedDate     - The created date.
 * @property {Guid}   CreatedUID      - The UID of the creator.
 * @property {String} CreatedFullName - The full name of the creator.
 */

/**
 * A ticket type.
 * @typedef  {Object}  TicketType
 * @property {Number} ID - The ID of the ticket type.
 * @property {Number} AppID - The ID of the containing application.
 * @property {String} AppName - The name of the containing application.
 * @property {String} Name - The ticket type name.
 * @property {String} Description - The ticket type description.
 * @property {Number} CategoryID - The ID of the containing category.
 * @property {String} CategoryName - The name of the containing category.
 * @property {String} FullName - The full name of the type, which includes the type category.
 * @property {Boolean} IsActive - A value indicating whether the ticket type is active.
 * @property {Guid|null} ReviewerUid - The UID of the reviewing person.
 * @property {String} ReviewerFullName - The full name of the reviewing person.
 * @property {String} ReviewerEmail - The email address of the reviewing person.
 * @property {Number} ReviewingGroupID - The ID of the reviewing group.
 * @property {String} ReviewingGroupName - The name of the reviewing group.
 * @property {Boolean} NotifyReviewer - A value indicating whether the reviewing resource(s) (and other addresses, if specified) should be notified of any new tickets that are created with this type (or later changed to this type).
 * @property {String} OtherNotificationEmailAddresses - The other email addresses to notify of incoming tickets when the reviewer notification is enabled.
 * @property {Number} DefaultSLAID - The ID of the default SLA to use when tickets are created with this type.
 * @property {String} DefaultSLAName - The name of the default SLA to use when tickets are created with this type.
 * @property {Boolean} DefaultSLAIsActive - The active status of the default SLA to use when tickets are created with this type.
 * @property {Number} DefaultTaskTemplateID - The ID of the default task template to use when tickets are created with this type.
 * @property {String} DefaultTaskTemplateName - The name of the default task template to use when tickets are created with this type.
 * @property {Boolean} DefaultTaskTemplateIsActive - The active status of the default task template to use when tickets are created with this type.
 * @property {Guid|null} DefaultResponsibleUid - The UID of the default person to assign when tickets are created with this type.
 * @property {String} DefaultResponsibleFullName - The full name of the default person to assign when tickets are created with this type.
 * @property {Number} DefaultResponsibleGroupID - The ID of the default group to assign when tickets are created with this type.
 * @property {String} DefaultResponsibleGroupName - The name of the default group to assign when tickets are created with this type.
 * @property {Number} WorkspaceID - The ID of the associated workspace.
 * @property {String} WorkspaceName - The name of the associated workspace.
 */

/**
 * Options for ticket creation.
 * @typedef  {Object}  TicketCreateOptions
 * @property {Boolean} EnableNotifyReviewer     - A value indicating whether the reviewer notification should be enabled. Even if this value is true, the reviewer will not necessarily be notified unless it is explicity specified on the ticket's type.
 * @property {Boolean} NotifyRequestor          - A value indicating whether the requestor should be notified.
 * @property {Boolean} NotifyResponsible        - A value indicating whether the responsible resource(s) should be notified.
 * @property {Boolean} AutoAssignResponsibility - A value indicating whether the ticket's responsibility should be auto-assigned based on the type.
 * @property {Boolean} AllowRequestorCreation   - A value indicating whether a requestor should be created if an existing person with machine information cannot be found.
 */

/**
 * A set of parameters designed to allow for setting the membership of users in Applications. 
 * @typedef   {Object}    UserApplicationsBulkManagementParameters 
 * @property 	{Guid[]}    UserUids 	                  - Gets or sets the user UIDs to add to the applications provided in Application Names.
 * @property 	{String[]}  ApplicationNames            - Gets or sets the application names to add the users provided in userUIDs to.
 * @property 	{Boolean}   ReplaceExistingApplications - Gets or sets a value indicating whether applications that provided users already belong to should be removed.
 */

/**
 * A set of parameters designed to allow for setting the membership of users in Groups. 
 * @typedef   {Object}  UserGroupsBulkManagementParameters  
 * @property 	{Guid[]}  UserUIDs 	        - Gets or sets the collection of user UIDs to add to the groups provided in GroupIDs.
 * @property 	{Int32[]} GroupIDs 	        - Gets or sets the collection of group IDs that users provided in UserUIDs will be added to.
 * @property 	{Boolean} RemoveOtherGroups - Gets or sets a value indicating whether groups that provided users already belong to should be removed.
 */

/**
 * A set of parameters designed to allow for setting the membership of users in Accounts. 
 * @typedef   {Object}  UserAccountsBulkManagementParameters
 * @property 	{Guid[]}  UserUids 	              - Gets or sets the collection of user UIDs to add to the groups provided in GroupIDs.
 * @property 	{Int32[]} AccountIDs 	            - Gets or sets the collection of group IDs that users provided in UserUIDs will be added to.
 * @property 	{Boolean} ReplaceExistingAccounts - Gets or sets a value indicating whether groups that provided users already belong to should be removed.
 */
