Feature:
  Verify different GET , POST and PUT operations using REST-assured

  #Geting the URL , POST and PUT the Place Name of the Google Map API Request
    Scenario Outline: GETing  details in Google Map API and updating the Address and verifying new changed address
    Given User set the Query Parameters for the service API
    When User perform the GET operation for the given service URL
    Then the status code is "<StatusCode>"
    Examples:
      | StatusCode  |
      | 200 |


   #Posting the URL , POST and PUT the Place Name of the Google Map API Request
  Scenario Outline: Posting New details in Google Map API and updating the Address and verifying new changed address
   Given User set the Query Parameters for the service API
    When User perform POST operation with a new set of address details
    And User perform GET with new set of details with address as "<AddressDetails>"
    Examples:
      | AddressDetails  |
      | 29, side layout, cohen 09 |


       #Updating the URL with the Place Name of the Google Map API Request
  Scenario Outline:  Updating by changing the address details in Google Map API and verifying new changed address
    Given User set the Query Parameters for the service API
    And User perform update of address in the existing data with new Address as "<NewAddressDetails>" with Status Message as "<StatusMessage>"
    And User verify the updated address as "<NewAddressDetails>"
Examples:
  | NewAddressDetails  |StatusMessage|
  | Summer Walk, Africa |Address successfully updated|







  @SkipTest
  #Geting the URL and aserting the first Name of the Service Request - Sample GET using local host json jar
  Scenario: Verify the author of the JSON
    Given User perform GET operation for "/list"
    And User perform GET for the list number "1" and "firstName" should be "Vernon"


  @SkipTest
  #Geting the URL and printing the data and asserting one of the employee Name of the Service Request - Sample GET
  Scenario: Verify the author of the JSON
    Given User perform GET operation for "/employees"
    And User perform GET and assert "Employee Name" should be "Tiger Nixon" in the list


  @SkipTest
   #Sample POST in BDD Style asserting the status code and success message
  Scenario: Verify the author of the JSON
    Given User perform POST operation for "/create"
    And User verify the  POST operation for the given Request

  @SkipTest
       #Sample PUT in BDD Style asserting the status code and success message
  Scenario: Verify the author of the JSON
    Given User perform PUT operation for "/update/"
    And User verify the PUT operation for the given Request with empName "Tiger Nixon" and empAge "320800" and empSal "62"


