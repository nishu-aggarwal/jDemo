import Utilities.RestAssuredExtention;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.Before;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/Features"

},
        tags = {"@Initialize,~@SkipTest" }, glue = {"Steps"},
        format = {"json:target/cucumber.json","html:target/site/cucumber-pretty", "junit:target/cucumber-results.html"}

)
public class TestRunner  {
    @Before
    public void TestSetUp()
    {
        RestAssuredExtention restAssuredExtention = new RestAssuredExtention();
    }
}
