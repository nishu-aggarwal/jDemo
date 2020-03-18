package Steps;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ResponseOptions;
import java.io.IOException;

public class GetPostSteps extends  RestUtils {

    private static ResponseOptions<Response> response;


    @Given("^User set the Query Parameters for the service API$")
    public void userSetTheQueryParametersForTheServiceAPI() throws IOException, ClassNotFoundException {
        BDDStyleMethod.setQueryParameters();
    }

    @When("^User perform the GET operation for the given service URL$")
    public void userPerformTheGETOperationForTheGivenServiceURL() throws IOException {
        BDDStyleMethod.getData();
    }

    @Then("^the status code is \"([^\"]*)\"$")
    public void theStatusCodeIs(String val) throws Throwable {
        BDDStyleMethod.verifyStatusCode(val);
    }


    @When("^User perform POST operation with a new set of address details$")
    public void userPerformPOSTOperationWithANewSetOfAddressDetails() throws IOException {
        System.out.println("################# POST OPERATION ################");
        BDDStyleMethod.postData();
    }


    @And("^User perform update of address in the existing data with new Address as \"([^\"]*)\" with Status Message as \"([^\"]*)\"$")
    public void userPerformUpdateOfAddressInTheExistingDataWithNewAddressAsWithStatusMessageAs(String address, String stsMesage) throws Throwable {
        System.out.println("################# PUT OPERATION ################");
        BDDStyleMethod.updateData(address,stsMesage);
    }

    @And("^User perform GET with new set of details with address as \"([^\"]*)\"$")
    public void userPerformGETWithNewSetOfDetailsWithAddressAs(String address) throws Throwable {
        System.out.println("################# VERIFY GET OPERATION ################");
        BDDStyleMethod.verifyGetData(address);
    }

    @And("^User verify the updated address as \"([^\"]*)\"$")
    public void userVerifyTheUpdatedAddressAs(String address) throws Throwable {
        System.out.println("################# VERIFY UPDATED USING GET OPERATION ################");
        BDDStyleMethod.verifyGetData(address);
    }

    @Given("^User perform POST operation for \"([^\"]*)\"$")
    public void userPerformPOSTOperationFor(String basePath) throws Throwable {

        BDDStyleMethod.SamplePostData(basePath);
    }

    @And("^User verify the  POST operation for the given Request$")
    public void userVerifyThePOSTOperationForTheGivenRequest() {
        BDDStyleMethod.testPost();
    }

    @Given("^User perform PUT operation for \"([^\"]*)\"$")
    public void userPerformPUTOperationFor(String basePath) throws Throwable {
        BDDStyleMethod.SamplePutData(basePath);
    }

    @And("^User verify the PUT operation for the given Request with empName \"([^\"]*)\" and empAge \"([^\"]*)\" and empSal \"([^\"]*)\"$")
    public void userVerifyThePUTOperationForTheGivenRequestWithEmpNameAndEmpAgeAndEmpSal(String Name, String Age, String Sal) throws Throwable {
        BDDStyleMethod.SampleTestPut();
    }


    @And("^User perform GET and assert \"([^\"]*)\" should be \"([^\"]*)\" in the list$")
    public void userPerformGETAndAssertShouldBeInTheList(String arg0, String EmpName) throws Throwable {
        BDDStyleMethod.SampleGetPost(EmpName);
    }

    @And("^User perform GET for the list number \"([^\"]*)\" and \"([^\"]*)\" should be \"([^\"]*)\"$")
    public void userPerformGETForTheListNumberAndShouldBe(String listNumber, String attributeName, String attributeVal) throws Throwable {
        BDDStyleMethod.SimpleGetPost(listNumber,attributeName,attributeVal);
    }



}
