$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GetPost.feature");
formatter.feature({
  "line": 1,
  "name": "GET: Automated Demo Tests",
  "description": "Description: GET: purpose of this feature is to test some demo app.",
  "id": "get:-automated-demo-tests",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "GETing  details in Google Map API and updating the Address and verifying new changed address",
  "description": "",
  "id": "get:-automated-demo-tests;geting--details-in-google-map-api-and-updating-the-address-and-verifying-new-changed-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User set the Query Parameters for the service API",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User perform the GET operation for the given service URL",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the status code is \"\u003cStatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "get:-automated-demo-tests;geting--details-in-google-map-api-and-updating-the-address-and-verifying-new-changed-address;",
  "rows": [
    {
      "cells": [
        "StatusCode"
      ],
      "line": 10,
      "id": "get:-automated-demo-tests;geting--details-in-google-map-api-and-updating-the-address-and-verifying-new-changed-address;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 11,
      "id": "get:-automated-demo-tests;geting--details-in-google-map-api-and-updating-the-address-and-verifying-new-changed-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "GETing  details in Google Map API and updating the Address and verifying new changed address",
  "description": "",
  "id": "get:-automated-demo-tests;geting--details-in-google-map-api-and-updating-the-address-and-verifying-new-changed-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User set the Query Parameters for the service API",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User perform the GET operation for the given service URL",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the status code is \"200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GetPostSteps.userSetTheQueryParametersForTheServiceAPI()"
});
formatter.result({
  "duration": 489399100,
  "status": "passed"
});
formatter.match({
  "location": "GetPostSteps.userPerformTheGETOperationForTheGivenServiceURL()"
});
formatter.result({
  "duration": 2554552700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "GetPostSteps.theStatusCodeIs(String)"
});
formatter.result({
  "duration": 725084800,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 14,
      "value": "#Posting the URL , POST and PUT the Place Name of the Google Map API Request"
    }
  ],
  "line": 16,
  "name": "Posting New details in Google Map API and updating the Address and verifying new changed address",
  "description": "",
  "id": "get:-automated-demo-tests;posting-new-details-in-google-map-api-and-updating-the-address-and-verifying-new-changed-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User set the Query Parameters for the service API",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User perform POST operation with a new set of address details",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User perform GET with new set of details with address as \"\u003cAddressDetails\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "get:-automated-demo-tests;posting-new-details-in-google-map-api-and-updating-the-address-and-verifying-new-changed-address;",
  "rows": [
    {
      "cells": [
        "AddressDetails"
      ],
      "line": 21,
      "id": "get:-automated-demo-tests;posting-new-details-in-google-map-api-and-updating-the-address-and-verifying-new-changed-address;;1"
    },
    {
      "cells": [
        "29, side layout, cohen 09"
      ],
      "line": 22,
      "id": "get:-automated-demo-tests;posting-new-details-in-google-map-api-and-updating-the-address-and-verifying-new-changed-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Posting New details in Google Map API and updating the Address and verifying new changed address",
  "description": "",
  "id": "get:-automated-demo-tests;posting-new-details-in-google-map-api-and-updating-the-address-and-verifying-new-changed-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User set the Query Parameters for the service API",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User perform POST operation with a new set of address details",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User perform GET with new set of details with address as \"29, side layout, cohen 09\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "GetPostSteps.userSetTheQueryParametersForTheServiceAPI()"
});
formatter.result({
  "duration": 3385300,
  "status": "passed"
});
formatter.match({
  "location": "GetPostSteps.userPerformPOSTOperationWithANewSetOfAddressDetails()"
});
formatter.result({
  "duration": 1053208700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29, side layout, cohen 09",
      "offset": 58
    }
  ],
  "location": "GetPostSteps.userPerformGETWithNewSetOfDetailsWithAddressAs(String)"
});
formatter.result({
  "duration": 371779900,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 25,
      "value": "#Updating the URL with the Place Name of the Google Map API Request"
    }
  ],
  "line": 27,
  "name": "Updating by changing the address details in Google Map API and verifying new changed address",
  "description": "",
  "id": "get:-automated-demo-tests;updating-by-changing-the-address-details-in-google-map-api-and-verifying-new-changed-address",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User set the Query Parameters for the service API",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User perform update of address in the existing data with new Address as \"\u003cNewAddressDetails\u003e\" with Status Message as \"\u003cStatusMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User verify the updated address as \"\u003cNewAddressDetails\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "get:-automated-demo-tests;updating-by-changing-the-address-details-in-google-map-api-and-verifying-new-changed-address;",
  "rows": [
    {
      "cells": [
        "NewAddressDetails",
        "StatusMessage"
      ],
      "line": 32,
      "id": "get:-automated-demo-tests;updating-by-changing-the-address-details-in-google-map-api-and-verifying-new-changed-address;;1"
    },
    {
      "cells": [
        "Summer Walk, Africa",
        "Address successfully updated"
      ],
      "line": 33,
      "id": "get:-automated-demo-tests;updating-by-changing-the-address-details-in-google-map-api-and-verifying-new-changed-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Updating by changing the address details in Google Map API and verifying new changed address",
  "description": "",
  "id": "get:-automated-demo-tests;updating-by-changing-the-address-details-in-google-map-api-and-verifying-new-changed-address;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User set the Query Parameters for the service API",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User perform update of address in the existing data with new Address as \"Summer Walk, Africa\" with Status Message as \"Address successfully updated\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User verify the updated address as \"Summer Walk, Africa\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "GetPostSteps.userSetTheQueryParametersForTheServiceAPI()"
});
formatter.result({
  "duration": 1101700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summer Walk, Africa",
      "offset": 73
    },
    {
      "val": "Address successfully updated",
      "offset": 118
    }
  ],
  "location": "GetPostSteps.userPerformUpdateOfAddressInTheExistingDataWithNewAddressAsWithStatusMessageAs(String,String)"
});
formatter.result({
  "duration": 355321500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Summer Walk, Africa",
      "offset": 36
    }
  ],
  "location": "GetPostSteps.userVerifyTheUpdatedAddressAs(String)"
});
formatter.result({
  "duration": 348921400,
  "status": "passed"
});
});