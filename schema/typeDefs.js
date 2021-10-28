
const { gql } = require("apollo-server-express");

let typeDefs = gql`

type configuredAlertsData {
    configuredAlerts :  [configuredAlertsDataObj]
    links : linksObj
    total : totalObj,
    responseStatus : String
    
    
} 

type totalObj{
     items : Int,
     pages : Int
}

type linksObj{
    prev:  String ,
    next: String ,
    last: String
}

type operandsObj {
     operandID : Int,
     operandName : String,
     operatorID : Int,
     condition : String,
     value : String,
     unit : String
}

type configuredAlertsDataObj{
    alertConfigID: Int,
    alertConfigUID: String,
    notificationTitle: String,
    allAssetsInd: Boolean,
    notificationTypeGroupID: Int,
    notificationTypeID: Int,
    createdDate: String,
    updatedDate: String,
    notificationType: String,
    numberOfAssets: Int,
    numberOfAssetGroups: Int,
    numberOfGeofences: Int,
    alertCategoryID: Int,
    alertGroupID: Int,
    operands : [operandsObj]
}


type notificationTypeGroupsData{
    notificationTypeGroups : [notificationTypeGroupsObj],
     
}


type notificationTypeGroupsObj{
    notificationTypeGroupID : Int,
    notificationTypeGroupName : String,
    notificationTypes : [notificationTypesObj]
}

type notificationTypesObj{
    notificationTypeID : Int,
    notificationTypeName : String,
    appName : String,
    appURL : String,
    operands : [notificationOperandsObj]
}

type notificationOperandsObj {
    operandName : String,
    operandID : Int,
    maxValue: Int,
    minValue: Int,
    maxOccurrence: Int,
    minOccurrence: Int,
    operators : [notificationInnerOperandsObj]
}

type notificationInnerOperandsObj{
    operatorID: Int,
    code: String,
    name: String
}


# Queries
type Query{
    getConfiguredAlertsData  : configuredAlertsData ,
    getNotificationTypeGroupsData : notificationTypeGroupsData


}
`

let Data = {
    "notificationTypeGroups": [
      {
        "notificationTypeGroupID": 1,
        "notificationTypeGroupName": "Asset Status",
        "notificationTypes": [
          {
            "notificationTypeID": 1,
            "notificationTypeName": "Asset On",
            "appName": "VL Unified Fleet",
            "appURL": "https://unifiedfleet.myvisionlink.com",
            "operands": [
              {
                "operandName": "Asset On",
                "operandID": 1,
                "maxValue": 1,
                "minValue": 1,
                "maxOccurrence": 999,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 1,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              }
            ]
          },
          {
            "notificationTypeID": 2,
            "notificationTypeName": "Asset Off",
            "appName": "VL Unified Fleet",
            "appURL": "https://unifiedfleet.myvisionlink.com",
            "operands": [
              {
                "operandName": "Asset Off",
                "operandID": 2,
                "maxValue": 1,
                "minValue": 1,
                "maxOccurrence": 999,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 2,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              }
            ]
          },
          {
            "notificationTypeID": 3,
            "notificationTypeName": "Not Reporting",
            "appName": "VL Unified Fleet",
            "appURL": "https://unifiedfleet.myvisionlink.com",
            "operands": [
              {
                "operandName": "Not Reporting",
                "operandID": 3,
                "maxValue": 1,
                "minValue": 1,
                "maxOccurrence": 999,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 3,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              }
            ]
          },
          {
            "notificationTypeID": 13,
            "notificationTypeName": "Alternate Power",
            "appName": "VL Unified Fleet",
            "appURL": "https://unifiedfleet.myvisionlink.com",
            "operands": [
              {
                "operandName": "Alternate Power",
                "operandID": 15,
                "maxValue": 1,
                "minValue": 1,
                "maxOccurrence": 999,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 28,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              }
            ]
          },
          {
            "notificationTypeID": 14,
            "notificationTypeName": "Not Expected To Report",
            "appName": "VL Unified Fleet",
            "appURL": "https://unifiedfleet.myvisionlink.com",
            "operands": [
              {
                "operandName": "Not Expected To Report",
                "operandID": 16,
                "maxValue": 1,
                "minValue": 1,
                "maxOccurrence": 999,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 29,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              }
            ]
          },
          {
            "notificationTypeID": 21,
            "notificationTypeName": "Not Ready To Run",
            "appName": "VL Unified Fleet",
            "appURL": "https://unifiedfleet.myvisionlink.com",
            "operands": [
              {
                "operandName": "Not Ready To Run",
                "operandID": 31,
                "maxValue": 1,
                "minValue": 1,
                "maxOccurrence": 999,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 46,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              }
            ]
          },
          {
            "notificationTypeID": 22,
            "notificationTypeName": "Movement With Asset On",
            "appName": "VL Unified Fleet",
            "appURL": "https://unifiedfleet.myvisionlink.com",
            "operands": [
              {
                "operandName": "Movement With Asset On",
                "operandID": 32,
                "maxValue": 1,
                "minValue": 1,
                "maxOccurrence": 999,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 47,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              }
            ]
          },
          {
            "notificationTypeID": 23,
            "notificationTypeName": "Movement With Asset Off",
            "appName": "VL Unified Fleet",
            "appURL": "https://unifiedfleet.myvisionlink.com",
            "operands": [
              {
                "operandName": "Movement With Asset Off",
                "operandID": 33,
                "maxValue": 1,
                "minValue": 1,
                "maxOccurrence": 999,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 48,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              }
            ]
          }
        ]
      },


      {
        "notificationTypeGroupID": 3,
        "notificationTypeGroupName": "Fuel",
        "notificationTypes": [
          {
            "notificationTypeID": 5,
            "notificationTypeName": "Fuel Level",
            "appName": "VL Unified Fleet",
            "appURL": "https://unifiedfleet.myvisionlink.com",
            "operands": [
              {
                "operandName": "Fuel Level",
                "operandID": 5,
                "maxValue": 100,
                "minValue": 0,
                "maxOccurrence": 1,
                "minOccurrence": 1,
                "unit": "Percentage",
                "operators": [
                  {
                    "operatorID": 6,
                    "code": "EQ",
                    "name": "Equal to"
                  },
                  {
                    "operatorID": 7,
                    "code": "GT",
                    "name": "Greater than"
                  },
                  {
                    "operatorID": 8,
                    "code": "LT",
                    "name": "Less than"
                  },
                  {
                    "operatorID": 9,
                    "code": "GTE",
                    "name": "Greater than or equal to"
                  },
                  {
                    "operatorID": 10,
                    "code": "LTE",
                    "name": "Less than or equal to"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "notificationTypeGroupID": 5,
        "notificationTypeGroupName": "Engine Hours",
        "notificationTypes": [
          {
            "notificationTypeID": 7,
            "notificationTypeName": "Engine Hours",
            "appName": "VL Unified Fleet",
            "appURL": "https://unifiedfleet.myvisionlink.com",
            "operands": [
              {
                "operandName": "Engine Hours",
                "operandID": 7,
                "maxValue": 999999999,
                "minValue": 1,
                "maxOccurrence": 1,
                "minOccurrence": 1,
                "unit": "Hours",
                "operators": [
                  {
                    "operatorID": 21,
                    "code": "EQ",
                    "name": "Equal to"
                  },
                  {
                    "operatorID": 12,
                    "code": "GT",
                    "name": "Greater than"
                  },
                  {
                    "operatorID": 22,
                    "code": "LT",
                    "name": "Less than"
                  },
                  {
                    "operatorID": 13,
                    "code": "GTE",
                    "name": "Greater than or equal to"
                  },
                  {
                    "operatorID": 23,
                    "code": "LTE",
                    "name": "Less than or equal to"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "notificationTypeGroupID": 6,
        "notificationTypeGroupName": "Odometer",
        "notificationTypes": [
          {
            "notificationTypeID": 8,
            "notificationTypeName": "Odometer",
            "appName": "VL Unified Fleet",
            "appURL": "https://unifiedfleet.myvisionlink.com",
            "operands": [
              {
                "operandName": "Odometer",
                "operandID": 8,
                "maxValue": 999999999,
                "minValue": 0,
                "maxOccurrence": 1,
                "minOccurrence": 1,
                "unit": "Kilometers",
                "operators": [
                  {
                    "operatorID": 14,
                    "code": "EQ",
                    "name": "Equal to"
                  },
                  {
                    "operatorID": 15,
                    "code": "GT",
                    "name": "Greater than"
                  },
                  {
                    "operatorID": 16,
                    "code": "LT",
                    "name": "Less than"
                  },
                  {
                    "operatorID": 17,
                    "code": "GTE",
                    "name": "Greater than or equal to"
                  },
                  {
                    "operatorID": 18,
                    "code": "LTE",
                    "name": "Less than or equal to"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "notificationTypeGroupID": 8,
        "notificationTypeGroupName": "Fault",
        "notificationTypes": [
          {
            "notificationTypeID": 11,
            "notificationTypeName": "Fault Code",
            "appName": "VL Unified Service",
            "appURL": "https://unifiedservice.myvisionlink.com",
            "operands": [
              {
                "operandName": "OccurenceCount",
                "operandID": 11,
                "maxValue": 999999999,
                "minValue": 1,
                "maxOccurrence": 1,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 24,
                    "code": "GTE",
                    "name": "Greater than or equal to"
                  }
                ]
              },
              {
                "operandName": "Severity",
                "operandID": 12,
                "maxValue": 3,
                "minValue": 1,
                "maxOccurrence": 1,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 25,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              },
              {
                "operandName": "FaultCode Type",
                "operandID": 13,
                "maxValue": 2,
                "minValue": 1,
                "maxOccurrence": 1,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 26,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              },
              {
                "operandName": "FaultCode Identifier",
                "operandID": 23,
                "maxOccurrence": 1,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 40,
                    "code": "EQ",
                    "name": "Equal to"
                  },
                  {
                    "operatorID": 41,
                    "code": "NEQ",
                    "name": "Not Equal to"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "notificationTypeGroupID": 9,
        "notificationTypeGroupName": "Fluid Analysis",
        "notificationTypes": [
          {
            "notificationTypeID": 12,
            "notificationTypeName": "Fluid Analysis",
            "appName": "VL Unified Service",
            "appURL": "https://unifiedservice.myvisionlink.com",
            "operands": [
              {
                "operandName": "FluidSeverity",
                "operandID": 14,
                "maxValue": 3,
                "minValue": 1,
                "maxOccurrence": 1,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 27,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "notificationTypeGroupID": 10,
        "notificationTypeGroupName": "Maintenance",
        "notificationTypes": [
          {
            "notificationTypeID": 15,
            "notificationTypeName": "Maintenance",
            "appName": "VL Unified Service",
            "appURL": "https://unifiedservice.myvisionlink.com",
            "operands": [
              {
                "operandName": "DueType",
                "operandID": 17,
                "maxValue": 2,
                "minValue": 1,
                "maxOccurrence": 999,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 30,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              },
              {
                "operandName": "DueInHour",
                "operandID": 18,
                "maxValue": 999999999,
                "minValue": -999999999,
                "maxOccurrence": 999,
                "minOccurrence": 1,
                "unit": "Hours",
                "operators": [
                  {
                    "operatorID": 31,
                    "code": "LTE",
                    "name": "Less than or equal to"
                  }
                ]
              },
              {
                "operandName": "DueInOdometer",
                "operandID": 19,
                "maxValue": 999999999,
                "minValue": -999999999,
                "maxOccurrence": 999,
                "minOccurrence": 1,
                "unit": "Kilometers",
                "operators": [
                  {
                    "operatorID": 32,
                    "code": "LTE",
                    "name": "Less than or equal to"
                  }
                ]
              },
              {
                "operandName": "DueInDays",
                "operandID": 20,
                "maxValue": 999999999,
                "minValue": 1,
                "maxOccurrence": 999,
                "minOccurrence": 1,
                "unit": "Days",
                "operators": [
                  {
                    "operatorID": 33,
                    "code": "LTE",
                    "name": "Less than or equal to"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "notificationTypeGroupID": 11,
        "notificationTypeGroupName": "Inspection",
        "notificationTypes": [
          {
            "notificationTypeID": 16,
            "notificationTypeName": "Inspection",
            "appName": "VL Unified Service",
            "appURL": "https://unifiedservice.myvisionlink.com",
            "operands": [
              {
                "operandName": "InspectionSeverity",
                "operandID": 21,
                "maxValue": 4,
                "minValue": 1,
                "maxOccurrence": 1,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 37,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "notificationTypeGroupID": 12,
        "notificationTypeGroupName": "Excessive Daily Idle",
        "notificationTypes": [
          {
            "notificationTypeID": 17,
            "notificationTypeName": "Excessive Daily Idle",
            "appName": "VL Unified Fleet",
            "appURL": "https://unifiedfleet.myvisionlink.com",
            "operands": [
              {
                "operandName": "Excessive Daily Idle",
                "operandID": 22,
                "maxValue": 24,
                "minValue": 0,
                "maxOccurrence": 1,
                "minOccurrence": 1,
                "unit": "Hours",
                "operators": [
                  {
                    "operatorID": 38,
                    "code": "GT",
                    "name": "Greater than"
                  },
                  {
                    "operatorID": 39,
                    "code": "GTE",
                    "name": "Greater than or equal to"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "notificationTypeGroupID": 14,
        "notificationTypeGroupName": "Switches",
        "notificationTypes": [
          {
            "notificationTypeID": 19,
            "notificationTypeName": "Switch",
            "appName": "VL Unified Fleet",
            "appURL": "https://unifiedfleet.myvisionlink.com",
            "operands": [
              {
                "operandName": "Switch State",
                "operandID": 25,
                "maxValue": 1,
                "minValue": 0,
                "maxOccurrence": 1,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 43,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              },
              {
                "operandName": "DeviceType Switch",
                "operandID": 26,
                "maxOccurrence": 1,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 44,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "notificationTypeGroupID": 15,
        "notificationTypeGroupName": "Fuel Loss",
        "notificationTypes": [
          {
            "notificationTypeID": 20,
            "notificationTypeName": "Fuel Loss",
            "appName": "VL Unified Fleet",
            "appURL": "https://unifiedfleet.myvisionlink.com",
            "operands": [
              {
                "operandName": "Fuel Loss",
                "operandID": 30,
                "maxValue": 100,
                "minValue": 1,
                "maxOccurrence": 1,
                "minOccurrence": 1,
                "unit": "Percentage",
                "operators": [
                  {
                    "operatorID": 45,
                    "code": "GTE",
                    "name": "Greater than or equal to"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "notificationTypeGroupID": 16,
        "notificationTypeGroupName": "Zone Inclusion/Exclusion",
        "notificationTypes": [
          {
            "notificationTypeID": 24,
            "notificationTypeName": "Zone Inclusion/Exclusion",
            "appName": "VisionLink Administrator",
            "appURL": "https://administrator.myvisionlink.com",
            "operands": [
              {
                "operandName": "Inclusion",
                "operandID": 34,
                "maxValue": 1,
                "minValue": 0,
                "maxOccurrence": 999,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 49,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              },
              {
                "operandName": "Exclusion",
                "operandID": 35,
                "maxValue": 1,
                "minValue": 0,
                "maxOccurrence": 999,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 50,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "notificationTypeGroupID": 17,
        "notificationTypeGroupName": "Power Mode",
        "notificationTypes": [
          {
            "notificationTypeID": 25,
            "notificationTypeName": "Power Mode",
            "appName": "VL Unified Fleet",
            "appURL": "https://unifiedfleet.myvisionlink.com",
            "operands": [
              {
                "operandName": "Power Mode",
                "operandID": 36,
                "maxValue": 3,
                "minValue": 1,
                "maxOccurrence": 1,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 51,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "notificationTypeGroupID": 18,
        "notificationTypeGroupName": "Asset Security",
        "notificationTypes": [
          {
            "notificationTypeID": 26,
            "notificationTypeName": "Asset Security",
            "appName": "VL Unified Fleet",
            "appURL": "https://unifiedfleet.myvisionlink.com",
            "operands": [
              {
                "operandName": "Asset Security",
                "operandID": 37,
                "maxValue": 3,
                "minValue": 1,
                "maxOccurrence": 1,
                "minOccurrence": 1,
                "operators": [
                  {
                    "operatorID": 52,
                    "code": "EQ",
                    "name": "Equal to"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }




module.exports = typeDefs